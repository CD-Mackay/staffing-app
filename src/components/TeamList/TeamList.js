import React, { useState, useEffect } from "react";

import StyledTeamList from "./StyledTeamList";

import { getAllTeams } from "../../utilities/db-helpers";

const TeamList = () => {

  const [teams, setTeams] = useState([]);
  const makeTeamList = async () => {
    let result = await getAllTeams();
    setTeams(result);
  };

  useEffect(() => {
    makeTeamList();
  }, []);

  const TeamDisplay = ({name, lead}) => {
    return <div>
      <p>{name}</p>
      <p>{lead}</p>
    </div> 
  }
  return <StyledTeamList>
    {teams && teams.map((team) => {
      return <TeamDisplay name={team.teamName} lead={team.lead} />
    })}
  </StyledTeamList>;
};

export default TeamList;
