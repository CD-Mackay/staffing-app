import React, { useState } from "react";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({ staff }) => {
  const [teamList, setTeamList] = useState([]);
  const [selected, setSelected] = useState("");

  const handleAddToTeam = (event) => {
    event.preventDefault();
    const teamCopy = [...teamList];
    teamCopy.push(selected);
    setTeamList(teamCopy);
  };

  const handleSelectEmployee = (event) => {
    setSelected(event.target.value);
  };

  return (
    <StyledMakeTeam>
      <form>
        <input type="text" placeholder="team name" />
        <input type="text" placeholder="team lead" />
      </form>

      <form onSubmit={(e) => handleAddToTeam(e)}>
        <select
          name="employees"
          id="employees"
          onChange={(e) => handleSelectEmployee(e)}
        >
          {staff.map((employee) => {
            return <option value={employee.name}>{employee.name}</option>;
          })}
        </select>
        <button type="submit">add to team</button>
      </form>
    </StyledMakeTeam>
  );
};

export default MakeTeam;
