import { useState } from "react";
import "./style.css";

function Form({ registerTransaction }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Entrada");

  return (
    <div className="form">
      <section className="section__description">
        <p>Descrição</p>
        <input
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descricao"
        ></input>
      </section>

      <div>
        <section className="section__value">
          <p>Valor</p>
          <input
            type="number"
            name="value"
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </section>

        <section className="section__type">
          <p>Tipo de valor</p>
          <select name="type" onChange={(event) => setType(event.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saida</option>
          </select>
        </section>
      </div>

      <button
        className="button__form"
        type="submit"
        onClick={() => registerTransaction({ description, value, type })}
      >
        Inserir Valor
      </button>
    </div>
  );
}

export default Form;
