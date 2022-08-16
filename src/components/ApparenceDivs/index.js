import { AiFillCreditCard } from "../../../node_modules/react-icons/ai";
import "./style.css";

function ApparenceDivs() {
  return (
    <div className="circle__first">
      <div className="circle__second"></div>
      <div className="circle__third"></div>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="box__creditCard__one">
        <div className="credit__card">
          <AiFillCreditCard className="credit" />
        </div>

        <div className="card__div">
          <div className="div__one"></div>
          <div className="div__two"></div>
        </div>
      </div>

      <div className="box__creditCard__two">
        <div className="credit__card__two">
          <AiFillCreditCard className="credit__two" />
        </div>

        <div className="card__div__two">
          <div className="div__one"></div>
          <div className="div__two"></div>
        </div>
      </div>
    </div>
  );
}

export default ApparenceDivs;
