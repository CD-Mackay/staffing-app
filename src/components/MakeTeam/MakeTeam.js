import React, { useState } from "react";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({staff}) => {

  const [teamList, setTeamList] = useState([]);
  const [selected, setSelected] = useState("");

  const handleAddToTeam = () => {
    const teamCopy = [...teamList];
    teamCopy.push(selected);
    setTeamList(teamCopy);
  };

  const handleSelectEmployee = (event) =>{
    event.preventDefault();
    setSelected(event.target.value);

  }
return (
    <StyledMakeTeam>
      <form>
        <input type="text" placeholder="team name" />
        <input type="text" placeholder="team lead" />
        <select name="employees" id="employees" onChange={(e) => handleSelectEmployee(e)}>
          {staff.map((employee) => {
            return <option value={employee.name}>{employee.name}</option>
          })}
        </select>
        <button onClick={handleAddToTeam}>add to team</button>
      </form>
    </StyledMakeTeam>
  );
};

export default MakeTeam;