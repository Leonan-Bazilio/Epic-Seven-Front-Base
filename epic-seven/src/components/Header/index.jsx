import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div>
          <a className={styles.logo} href="">
            EPIC SEVEN
          </a>
        </div>
        <nav className={styles.navHeader}>
          <a className={styles.navLink} href="">
            Personagens
          </a>
          <a className={styles.navLink} href="">
            Tier list
          </a>
          <a className={styles.navLink} href="">
            Caçadas
          </a>
          <a className={styles.navLink} href="">
            Faça sua build
          </a>
        </nav>
      </div>
    </div>
  );
}
