import styles from "./styles.module.css";
export default function EventsTable() {
  return (
    <section>
      <table className={styles.tabelaEventos}>
        <thead>
          <tr>
            <th>nome</th>
            <th>descricao</th>
            <th>data inicio</th>
            <th>data fim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>aaaaaa</th>
            <th>bbbbbbbbbbbb</th>
            <th>cccccccccccc</th>
            <th>ddddd</th>
          </tr>
          <tr>
            <th>aaaaaa</th>
            <th>bbbbbbbbbbbb</th>
            <th>cccccccccccc</th>
            <th>ddddd</th>
          </tr>
          <tr>
            <th>aaaaaa</th>
            <th>bbbbbbbbbbbb</th>
            <th>cccccccccccc</th>
            <th>ddddd</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
