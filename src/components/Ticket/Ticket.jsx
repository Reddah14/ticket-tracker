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
      <h2 className="ticket__name ticket__generic">{employeeName}</h2>
      <h2 className="ticket__role ticket__generic">{employeeRole}</h2>
      <hr className="ticket__line ticket__generic"/> 
      <div className="ticket__counter ticket__generic">
        <h3 className = "ticket__counter-label ticket__generic">Counter</h3>
        <h3 className = "ticket__counter-number ticket__generic">{counter}</h3>
        <FaMinus onClick = {handleDecrement} className = "ticket__minus-button ticket__generic"/>
        <FaPlus onClick = {handleIncrement} className = "ticket__plus-button ticket__generic"/> 
      </div>
    </div>
  );
};

export default Ticket;
