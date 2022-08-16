import "./style.css";

function Dinero({ listTransactions }) {
  return (
    <div className="dinero">
      <div className="dinero__description">
        <p className="dinero__p">Valor Total:</p>
        <small className="dinero__small">O valor se refere ao saldo</small>
      </div>
      <p className="dinero__triste">
        R$
        {listTransactions.length !== 0
          ? listTransactions.reduce((acc, item, index, array) => {
              return (acc += item.value);
            }, 0)
          : `0`}
      </p>
    </div>
  );
}

export default Dinero;
