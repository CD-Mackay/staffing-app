import React from "react";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({staff}) => {
return (
    <StyledMakeTeam>
      <form>
        <input type="text" placeholder="team name" />
        <input type="text" placeholder="team lead" />
        <select name="employees" id="employees">
          {staff.map((employee) => {
            return <option value={employee.name}>{employee.name}</option>
          })}
        </select>
      </form>
    </StyledMakeTeam>
  );
};

export default MakeTeam;