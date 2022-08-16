import ApparenceDivs from "../ApparenceDivs";
import "./style.css";

function PageLogin({ userLogin }) {
  return (
    <div className="container">
      <div className="main__login">
        <div>
          <h1 className="main__title">
            Nu<small>Kenzie</small>
          </h1>
        </div>

        <div className="main__div__article">
          <article className="main__article">
            Centralize o controle das suas finanças
          </article>
          <small> de forma rápida e segura</small>
        </div>

        <div>
          <button className="main__button" onClick={userLogin}>
            Iniciar
          </button>
        </div>
      </div>

      <ApparenceDivs />
    </div>
  );
}

export default PageLogin;
