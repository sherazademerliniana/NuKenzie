import "./style.css";

function Header({ userLogin }) {
  return (
    <header className="header">
      <h1 className="header__title">
        Nu
        <small>Kenzie</small>
      </h1>

      <button onClick={userLogin} className="header__button">
        Inicio
      </button>
    </header>
  );
}

export default Header;
