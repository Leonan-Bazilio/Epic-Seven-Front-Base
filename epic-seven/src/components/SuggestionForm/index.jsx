import styles from "./styles.module.css";

export default function SuggestionForm() {
  return (
    <section>
      <div className="container">
        <div className={styles.formContainer}>
          <h2>Formulário de Sugestão ou Problema</h2>
          <form action="#" method="post">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="tipo">Tipo:</label>
            <select id="tipo" name="tipo" required>
              <option value="sugestao">Sugestão</option>
              <option value="problema">Problema</option>
            </select>

            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              name="descricao"
              rows="5"
              required
            ></textarea>

            <button className={styles.buttonForm} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
