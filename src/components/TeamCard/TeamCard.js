import React from "react";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team }) => {
  console.log(name, lead, team);
  return (
    <StyledTeamCard>
      <h6>
        {name} -- Team Lead: {lead}
      </h6>
      <ul>
      {team &&
        team.map((element) => {
          return <li>{element}</li>;
        })}
        {!team && <li>No members in this team</li>}
        </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
