import styles from "./styles.module.css";
import character from "../../assets/images/characters/straze.jpg";
import artifact from "../../assets/images/artifacts/artefato.png";

export default function LatestReleases() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.last}`}>Últimos</h1>
        <div className={styles.tudo}>
          <div className={styles.containerCharacters}>
            <h1 className={`${styles.title} ${styles.titleCharacters}`}>
              Personagens lançados
            </h1>
            <div className={styles.characters}>
              <div className={styles.character}>
                <img src={character} alt="Personagem 1" />
              </div>
              <div className={styles.character}>
                <img src={character} alt="Personagem 2" />
              </div>
              <div className={styles.character}>
                <img src={character} alt="Personagem 3" />
              </div>
            </div>
          </div>
          <div className={styles.containerArtifacts}>
            <h1 className={`${styles.title} ${styles.titleArtifacts}`}>
              Artefatos lançados
            </h1>
            <div className={styles.artifacts}>
              <div className={styles.artifact}>
                <img src={artifact} alt="Artefato 1" />
              </div>
              <div className={styles.artifact}>
                <img src={artifact} alt="Artefato 2" />
              </div>
              <div className={styles.artifact}>
                <img src={artifact} alt="Artefato 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
