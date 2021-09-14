import React from "react";

import "./Ticket.scss";

const Ticket = (props) => {
  const { employeeName, employeeRole } = props;
  return (
    <div className="ticket">
      <h2 className="ticket__name">{employeeName}</h2>
      <h2 className="ticket__role">{employeeRole}</h2>
      <div className="ticket__counter">
        <h3>Counter</h3>
        <h3>0</h3>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default Ticket;
