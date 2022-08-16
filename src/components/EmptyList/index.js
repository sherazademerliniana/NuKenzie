import "./style.css";

function EmptyList() {
  return (
    <section className="section__empty">
      <h1 className="empty__title">Você ainda não possui nenhum lançamento</h1>

      <div className="div__empty">
        <div className="bar__vert"></div>
        <div className="bar">
          <div className="bar__hori"></div>
          <div className="bar__hori__two"></div>
        </div>
      </div>

      <div className="div__empty">
        <div className="bar__vert"></div>
        <div className="bar">
          <div className="bar__hori"></div>
          <div className="bar__hori__two"></div>
        </div>
      </div>

      <div className="div__empty">
        <div className="bar__vert"></div>
        <div className="bar">
          <div className="bar__hori"></div>
          <div className="bar__hori__two"></div>
        </div>
      </div>
    </section>
  );
}

export default EmptyList;
