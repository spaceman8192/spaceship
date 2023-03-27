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
          <Link href="/blog" className={styles.button}>
            Blog
          </Link>
          <Link href="/logbook" className={styles.button}>
            Logbook
          </Link>
          <Link href="/about" className={styles.button}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
