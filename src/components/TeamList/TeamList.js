import React, { useState, useEffect } from "react";

import StyledTeamList from "./StyledTeamList";

import { getAllTeams } from "../../utilities/db-helpers";
import TeamCard from "../TeamCard/TeamCard";

const TeamList = () => {

  const [teams, setTeams] = useState([]);
  const makeTeamList = async () => {
    let result = await getAllTeams();
    setTeams(result);
  };

  useEffect(() => {
    makeTeamList();
  }, []);

  return <StyledTeamList>
    {teams && teams.map((team) => {
      return <TeamCard name={team.teamName} lead={team.lead} team={team.team} />
    })}
  </StyledTeamList>;
};

export default TeamList;
