import styles from "./styles.module.css";
import img from "../../assets/images/Blood-Moon-Haste.png";
export default function InitialSection() {
  return (
    <>
      <section className={styles.initialSection}>
        <div className={styles.container}>
          <div className={styles.gameResume}>
            <h1>Epic Seven</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nisi
              impedit perspiciatis. Nihil rerum sapiente odio nisi quidem fugit
              veniam aliquam soluta earum. Blanditiis excepturi tempora, id cum
              dolores quis Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Eum nisi impedit perspiciatis. Nihil rerum sapiente odio
              nisi quidem fugit veniam aliquam soluta earum. Blanditiis
              excepturi tempora, id cum dolores quis.
            </p>
            <button>
              <a
                target="_blank"
                href="https://play.google.com/store/search?q=epic%20seven&c=apps&hl=pt_BR"
              >
                Baixar google play
              </a>
            </button>
          </div>
          <div className={styles.image}>
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
