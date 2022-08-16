import { useState } from "react";
import PageFinance from "./components/PageFinance";
import PageLogin from "./components/PageLogin";
import "./components/Root/root.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [saveListTransaction, setSaveListTransactions] = useState([]);
  const [isLoged, setIsLoged] = useState(false);

  const registerTransaction = (newTransaction) => {
    if (newTransaction.type === "Despesa") {
      newTransaction.value = parseInt(newTransaction.value) * -1;
      setListTransactions([...listTransactions, newTransaction]);
    } else {
      newTransaction.value = parseInt(newTransaction.value);
      setListTransactions([...listTransactions, newTransaction]);
    }

    setSaveListTransactions(listTransactions);
  };

  const removeItem = (itemRemove) => {
    const filteredItems = listTransactions.filter((item, index) => {
      return index !== itemRemove;
    });

    setListTransactions(filteredItems);
    setSaveListTransactions(filteredItems);
  };

  const filterItens = (option) => {
    switch (option.innerText) {
      case "Entradas":
        const filteredItemsInput = saveListTransaction.filter((item) => {
          return item.type === "Entrada";
        });
        setListTransactions(filteredItemsInput);
        break;

      case "Despesas":
        const filteredItemsOutput = saveListTransaction.filter((item) => {
          return item.type === "Despesa";
        });
        setListTransactions(filteredItemsOutput);
        break;

      case "Todos":
        setListTransactions(saveListTransaction);
        break;

      default:
    }
  };

  const userLogin = () => {
    setIsLoged(!isLoged);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoged ? (
          <PageFinance
            userLogin={userLogin}
            listTransactions={listTransactions}
            registerTransaction={registerTransaction}
            removeItem={removeItem}
            filterItens={filterItens}
          />
        ) : (
          <PageLogin userLogin={userLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
