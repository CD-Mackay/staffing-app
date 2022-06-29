import React, { useState, useRef, useContext } from "react";

import { addTeam } from "../../utilities/db-helpers";
import AlertContext from "../../Context/AlertContext";
import Button from "../../Button/Button";
import { filterById } from "../../utilities/helpers";

import StyledMakeTeam from "./StyledMakeTeam";

const MakeTeam = ({ staff, setTeams, teams }) => {
  const [teamList, setTeamList] = useState([]);
  const [selected, setSelected] = useState("");
  const [lead, setLead] = useState("");
  const teamNameRef = useRef();
  const dateRef = useRef();
  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;

  const handleAddToTeam = (event) => {
    event.preventDefault();
    const teamCopy = [...teamList];
    teamCopy.push(selected);
    setTeamList(teamCopy);
  };

  const handlePickLead = (event) => {
    event.preventDefault();
    const id = event.target.value;
    const newLead = filterById(staff, id).pop();
    const leadObject = {
      name: newLead.name,
      id: newLead.id,
    };
    setLead(leadObject);
  };

  const handleSelectEmployee = (event) => {
    const id = event.target.value;
    const newAdd = filterById(staff, id).pop();
    console.log(newAdd);
    const employeeObject = {
      name: newAdd.name,
      id: newAdd.id,
    };
    setSelected(employeeObject);
  };


  const handleSetTeam = (e) => {
    e.preventDefault();
    const teamName = teamNameRef.current.value;
    const deadLine = dateRef.current.value;
    if (lead !== "" && teamName !== "" && teamList !== [] && deadLine) {
      let teamObject = {
        lead,
        teamName,
        team: teamList,
        deadLine,
      };

      addTeam(teamObject);
      let teamsCopy = [...teams];
      teamsCopy.push(teamObject);
      setTeams(teamsCopy);
      teamNameRef.current.value = "";
      setLead("");
      setTeamList([]);
      setAlert({
        color: "green",
        message: "team added",
        timer: true,
      });
      return;
    }
    setAlert({
      color: "#f66359",
      message: "All fields are required",
      timer: true
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
          onChange={(e) => handlePickLead(e)}
        >
          {staff.map((employee) => {
            return (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            );
          })}
        </select>
        <Button message="Create Team" />
        <div>
          <h4>Step 2: Add Deadline</h4>
          <label htmlFor="date" style={{"display": "none"}}>Add Deadline</label>
          <input type="date" ref={dateRef} />
        </div>
      </form>

      <form onSubmit={(e) => handleAddToTeam(e)}>
        {lead && <p>Team Lead:{lead.name}</p>}
        {teamList.map((element) => {
          return <p key={element.id}>{element.name}</p>;
        })}
        <h4>Step 3: Select Employees for team</h4>
        <select
          name="employees"
          id="employees"
          onChange={(e) => handleSelectEmployee(e)}
        >
          {staff.map((employee) => {
            return (
              <option key={employee.id} value={employee.id}>
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
