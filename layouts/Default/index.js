import styles from "./styles.module.css";

export default function DefaultLayout({ children }) {
  return <div className={styles.Default}>{children}</div>;
}
