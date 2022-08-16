import Dinero from "../Dinero";
import EmptyList from "../EmptyList";
import Form from "../Form";
import Header from "../Header";
import List from "../List";
import Nav from "../Nav";
import "./style.css";

function PageFinance({
  userLogin,
  listTransactions,
  registerTransaction,
  removeItem,
  filterItens,
}) {
  return (
    <>
      <Header userLogin={userLogin} />

      <div className="container bank">
        <section className="section__form">
          <Form
            className="sect__form"
            registerTransaction={registerTransaction}
          />

          <Dinero listTransactions={listTransactions} />
        </section>

        <section className="section__list">
          <Nav filterItens={filterItens} />

          {listTransactions.length !== 0 ? (
            <List listTransactions={listTransactions} removeItem={removeItem} />
          ) : (
            <EmptyList />
          )}
        </section>
      </div>
    </>
  );
}

export default PageFinance;
