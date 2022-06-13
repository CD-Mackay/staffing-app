import React from "react";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team }) => {
  return (
    <StyledTeamCard>
      <h6>
        {name} -- Team Lead: {lead}
      </h6>
      <ul>
      {team &&
        team.map((element) => {
          return <li key={element}>{element}<button>x</button></li>;
        })}
        {!team && <li>No members in this team</li>}
        </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
