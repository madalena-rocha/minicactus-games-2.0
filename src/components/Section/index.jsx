import "./styles.css";

export function Section({ id, title, children }) {
  return (
    <section id={id}>
      <div className="wrapper">
        <header>
          <h2>{title}</h2>
        </header>

        <div className="content">{children}</div>
      </div>
    </section>
  );
}
