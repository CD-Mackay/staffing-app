import React from "react";

import Button from "../../Button/Button";
import { deleteTeam } from "../../utilities/db-helpers";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team, id }) => {
  console.log(id);
  const Listing = ({ name }) => {
    return (
      <li>
        <div className="employee-listing">
          <p>{name}</p>
          <div>
            <Button message="view employee" />
            <Button message="remove from team" />
          </div>
        </div>
      </li>
    );
  };

  return (
    <StyledTeamCard>
      <div className="team-header">
        <h5>
          {name} -- Team Lead: {lead}
        </h5>
        <Button handler={() => deleteTeam(id)} message="delete team" />
      </div>
      <ul>
        {team &&
          team.map((element) => {
            return <Listing key={element} name={element} />;
          })}
        {!team && <li>No members in this team</li>}
      </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
