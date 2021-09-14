import React from "react";

import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import team from "../../team";

const Board = () => {
  const employeesArr = team.map((employee) => {
   return <Ticket employeeName={employee.name} employeeRole={employee.role}/>
  });

  return (
    <div className="board">
      {employeesArr}
    </div>
  );
};

export default Board;
