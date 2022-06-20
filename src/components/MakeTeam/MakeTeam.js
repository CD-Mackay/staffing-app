import React, { useState, useRef, useContext } from "react";

import { addTeam } from "../../utilities/db-helpers";
import AlertContext from "../../Context/AlertContext";
import Button from "../../Button/Button";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({ staff }) => {
  const [teamList, setTeamList] = useState([]);
  const [selected, setSelected] = useState("");
  const [lead, setLead] = useState("");
  const teamNameRef = useRef();

  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;

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
        team: teamList,
      };

      addTeam(teamObject);
      return;
    }
    setAlert({
      color: "#f66359",
      message: "All teams must have a name, lead and at least one member",
    });
  };

  return (
    <StyledMakeTeam>
      <form onSubmit={(e) => handleSetTeam(e)} id="init-form">
        <h4>Step 1: Pick name and Team Lead</h4>
        <input type="text" placeholder="team name" ref={teamNameRef} />
        <label htmlFor="employees">Select Lead</label>
        <select
          name="employees"
          id="employees"
          onChange={(e) => setLead(e.target.value)}
        >
          {staff.map((employee) => {
            return (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            );
          })}
        </select>
        <Button message="Create Team" />
      </form>

      <form onSubmit={(e) => handleAddToTeam(e)}>
        {lead && <p>Team Lead:{lead}</p>}
        {teamList.map((element) => {
          return <p key={element}>{element}</p>;
        })}
        <h4>Step 2: Select Employees for team</h4>
        <select
          name="employees"
          id="employees"
          onChange={(e) => handleSelectEmployee(e)}
        >
          {staff.map((employee) => {
            return (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            );
          })}
        </select>
        <Button message="add to team" />
      </form>
    </StyledMakeTeam>
  );
};

export default MakeTeam;
