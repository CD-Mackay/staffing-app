import React from "react";

import Button from "../../Button/Button";
import { deleteTeam, updateTeam } from "../../utilities/db-helpers";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team, id }) => {
  const handleRemoveFromTeam = (employeeId) => {
    let teamListing = [...team];
    teamListing = teamListing.filter((employee) => {
      return employee.id !== employeeId;
    });

    console.log(teamListing, id);
    updateTeam(id, teamListing)
  };

  const Listing = ({ name, id }) => {
    return (
      <li>
        <div className="employee-listing">
          <p>{name}</p>
          <div>
            <Button message="view employee" />
            <Button
              handler={() => handleRemoveFromTeam(id)}
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
        <Button handler={() => deleteTeam(id)} message="delete team" />
      </div>
      <ul>
        {team &&
          team.map((element) => {
            return <Listing key={element.id} id={element.id} name={element.name} />;
          })}
        {!team && <li>No members in this team</li>}
      </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
