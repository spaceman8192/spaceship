import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <div>
          <h1>Spaceship</h1>
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/" className={styles.button}>
            Main
          </Link>
          <Link href="bo/posts" className={styles.button}>
            Posts
          </Link>
          <Link href="bo/logbook" className={styles.button}>
            Logbook
          </Link>
          <Link href="bo/about" className={styles.button}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
