import React, { useState, useRef } from "react";

import { addTeam } from "../../utilities/db-helpers";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({ staff }) => {
  const [teamList, setTeamList] = useState([]);
  const [selected, setSelected] = useState("");
  const [lead, setLead] = useState("");
  const teamNameRef = useRef();

  const handleAddToTeam = (event) => {
    event.preventDefault();
    const teamCopy = [...teamList];
    teamCopy.push(selected);
    setTeamList(teamCopy);
  };

  const handleSelectEmployee = (event) => {
    setSelected(event.target.value);
  };

  const handleSetTeam = (e) => {
    e.preventDefault();
    const teamName = teamNameRef.current.value;
    if (lead !== "" && teamName !== "" && teamList !== []) {
      let teamObject = {
        lead,
        teamName,
        team: teamList
      };
  
      addTeam(teamObject);
      return
    };
    console.log("invalid team!")
   
  }

  return (
    <StyledMakeTeam>
      <form onSubmit={(e) => handleSetTeam(e)}>
        <input type="text" placeholder="team name" ref={teamNameRef} />
        <select
          name="employees"
          id="employees"
          onChange={(e) => setLead(e.target.value)}
        >
          {staff.map((employee) => {
            return <option value={employee.name}>{employee.name}</option>;
          })}
        </select>
        <button type="submit">Create Team</button>
      </form>

      <form onSubmit={(e) => handleAddToTeam(e)}>
        {lead && <p>Team Lead:{lead}</p>}
        {teamList.map((element) => {
          return <p>{element}</p>
        })}
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
