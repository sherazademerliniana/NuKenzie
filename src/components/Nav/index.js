import "./style.css";

function Nav({ filterItens }) {
  return (
    <nav className="nav">
      <h3 className="nav__title">Resumo financeiro</h3>
      <ul className="nav__itens">
        <li
          className="item__nav item__nav--active"
          onClick={(event) => {
            filterItens(event.target);
          }}
        >
          Todos
        </li>
        <li
          className="item__nav"
          onClick={(event) => {
            filterItens(event.target);
          }}
        >
          Entradas
        </li>
        <li
          className="item__nav"
          onClick={(event) => {
            filterItens(event.target);
          }}
        >
          Despesas
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
