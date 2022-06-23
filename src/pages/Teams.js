import React, { useEffect, useState } from "react";
import MakeTeam from "../components/MakeTeam/MakeTeam";
import TeamList from "../components/TeamList/TeamList";
import { getAllTeams } from "../utilities/db-helpers";

export default function Teams({ staff }) {
  console.log("page render!");
  const [teams, setTeams] = useState([]);
  const makeTeamList = async () => {
    let result = await getAllTeams();
    setTeams(result);
  };

  useEffect(() => {
    makeTeamList();
  }, []);
  return (
    <div>
      <MakeTeam staff={staff} setTeams={setTeams} teams={teams} />
      <TeamList teams={teams} />
    </div>
  );
}
