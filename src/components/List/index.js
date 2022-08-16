import { FaTrash } from "react-icons/fa";
import "./style.css";

function List({ listTransactions, removeItem }) {
  return (
    <ul className="list">
      {listTransactions.map(({ description, value, type }, index) => {
        return type === "Entrada" ? (
          <li key={index} className="list__item">
            <div className="bar__horiz"></div>
            <section className="area">
              <section className="list__area">
                <p className="list__description">{description}</p>
                <small className="list__type">{type}</small>
              </section>
              <p className="list__value">
                {value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                className="button__trash"
                value={index}
                onClick={() => {
                  removeItem(index);
                }}
              >
                <FaTrash />
              </button>
            </section>
          </li>
        ) : (
          <li key={index} className="list__item">
            <div className="bar__horiz__desp"></div>
            <section className="area">
              <section className="list__area">
                <p className="list__description">{description}</p>
                <small className="list__type">{type}</small>
              </section>
              <p className="list__value">
                {value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                className="button__trash"
                value={index}
                onClick={() => {
                  removeItem(index);
                }}
              >
                <FaTrash />
              </button>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
