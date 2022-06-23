import React, { useContext, useEffect, useState } from "react";

import Button from "../../Button/Button";
import { deleteTeam, updateTeam } from "../../utilities/db-helpers";
import AlertContext from "../../Context/AlertContext";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team, id }) => {
  const [teamState, setTeamState] = useState(team);
  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;

  const handleRemoveFromTeam = (employeeId, employeeName) => {
    let teamListing = [...team];
    teamListing = teamListing.filter((employee) => {
      return employee.id !== employeeId;
    });

    updateTeam(id, teamListing);
    setTeamState(teamListing);
    setAlert({
      color: "#f66359",
      message: `${employeeName} has been removed from ${name}`,
      timer: true,
    });
  };

  const handleDeleteTeam = (teamId) => {
    deleteTeam(teamId);
  };

  const confirmDeleteTeam = () => {
    setAlert({
      message: (
        <span>
          This is permant, are you sure?{" "}
          <button onClick={() => handleDeleteTeam(id)}>oui</button>
          <button onClick={() => setAlert("")}>non</button>
        </span>
      ),
      color: "#f66359",
      timer: false,
    });
  };

  useEffect(() => {}, [teamState]);

  const Listing = ({ name, id }) => {
    return (
      <li>
        <div className="employee-listing">
          <p>{name}</p>
          <div>
            <Button message="view employee" />
            <Button
              handler={() => handleRemoveFromTeam(id, name)}
              message="remove from team"
            />
          </div>
        </div>
      </li>
    );
  };

  return (
    <StyledTeamCard>
      <div className="team-header">
        <h5>
          {name} -- Team Lead: {lead.name}
        </h5>
        <Button handler={() => confirmDeleteTeam()} message="delete team" />
      </div>
      <ul>
        {team &&
          teamState.map((element, index) => {
            return (
              <Listing key={index} id={element.id} name={element.name} />
            );
          })}
        {!team && <li>No members in this team</li>}
      </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
