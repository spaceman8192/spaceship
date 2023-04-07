import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import styles from "@/styles/Common.module.css";

const SideMenu = ({ posts, onClickPost }) => {
  const { collapseSidebar } = useProSidebar();

  const onClickHandler = (post) => {
    onClickPost(post);
  };

  return (
    <Sidebar className={styles.sidebar} r>
      <Menu
        iconShape="square"
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 1) return { color: active ? "#999999" : "#222222" };
          },
        }}
      >
        <MenuItem onClick={() => collapseSidebar()}>접기/펼치기</MenuItem>
        <SubMenu label="JavaScript">
          <MenuItem className={styles.menuItem}>Component 1</MenuItem>
          <MenuItem className={styles.menuItem}>Component 2</MenuItem>
        </SubMenu>
        <SubMenu label="React.js">
          <MenuItem className={styles.menuItem}>Component 1</MenuItem>
          <MenuItem className={styles.menuItem}>Component 2</MenuItem>
        </SubMenu>
        <SubMenu label="Vue.js">
          <MenuItem className={styles.menuItem}>Component 1</MenuItem>
          <MenuItem className={styles.menuItem}>Component 2</MenuItem>
        </SubMenu>
        {posts.map((post) => (
          <MenuItem
            key={post.slug}
            className={styles.menuItem}
            onClick={() => onClickHandler(post)}
          >
            {post.data.title}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SideMenu;
