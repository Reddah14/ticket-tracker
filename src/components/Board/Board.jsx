import React from "react";

import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import team from "../../team";

const Board = () => {
  const namesArr = team.map((employee) => {
    return employee.name;
  });

  const rolesArr = team.map((employee) => {
    return employee.role;
  });

  return (
    <div className="board">
      <Ticket employeeName={namesArr[0]} employeeRole={rolesArr[0]} />
      <Ticket employeeName={namesArr[1]} employeeRole={rolesArr[1]} />
      <Ticket employeeName={namesArr[2]} employeeRole={rolesArr[2]} />
      <Ticket employeeName={namesArr[3]} employeeRole={rolesArr[3]} />
      <Ticket employeeName={namesArr[4]} employeeRole={rolesArr[4]} />
      <Ticket employeeName={namesArr[5]} employeeRole={rolesArr[5]} />
      <Ticket employeeName={namesArr[6]} employeeRole={rolesArr[6]} />
      <Ticket employeeName={namesArr[7]} employeeRole={rolesArr[7]} />
      <Ticket employeeName={namesArr[8]} employeeRole={rolesArr[8]} />
      <Ticket employeeName={namesArr[9]} employeeRole={rolesArr[9]} />
    </div>
  );
};

export default Board;
