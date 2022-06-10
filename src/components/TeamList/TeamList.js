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
  return <StyledTeamList></StyledTeamList>;
};

export default TeamList;
