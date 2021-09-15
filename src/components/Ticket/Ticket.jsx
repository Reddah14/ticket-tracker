import React, {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa";
import "./Ticket.scss";

const Ticket = (props) => {
  const { employeeName, employeeRole } = props;
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter => counter -= 1)
    }
    
  }

  const handleIncrement = () => {
    setCounter(counter => counter += 1)
  }

  return (
    <div className="ticket">
      <h2 className="ticket__name ticket__sub-item">{employeeName}</h2>
      <h2 className="ticket__role ticket__sub-item">{employeeRole}</h2>
      <hr className="ticket__line ticket__sub-item"/> 
      <div className="ticket__counter ticket__sub-item">
        <h3 className = "ticket__counter-label ticket__sub-item">Counter</h3>
        <h3 className = "ticket__counter-number ticket__sub-item">{counter}</h3>
        <FaMinus onClick = {handleDecrement} className = "ticket__minus-button ticket__sub-item"/>
        <FaPlus onClick = {handleIncrement} className = "ticket__plus-button ticket__sub-item"/> 
      </div>
    </div>
  );
};

export default Ticket;
