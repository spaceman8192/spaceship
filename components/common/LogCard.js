import styles from "@/styles/Common.module.css";

const LogCard = (props) => {
  const dateS = new Date(props.logDate);
  return (
    <div className={styles.logCard}>
      <h3>{dateS.toLocaleDateString()}</h3>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default LogCard;
