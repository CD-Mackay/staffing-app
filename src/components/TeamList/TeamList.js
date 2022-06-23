import React from "react";

import StyledTeamList from "./StyledTeamList";

import TeamCard from "../TeamCard/TeamCard";

const TeamList = ({ teams }) => {

  return (
    <StyledTeamList>
      {teams &&
        teams.map((team) => {
          return (
            <TeamCard
              name={team.teamName}
              key={team.id}
              lead={team.lead}
              id={team.id}
              team={team.team}
            />
          );
        })}
    </StyledTeamList>
  );
};

export default TeamList;
