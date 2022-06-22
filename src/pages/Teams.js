import React from "react";
import MakeTeam from "../components/MakeTeam/MakeTeam";
import TeamList from "../components/TeamList/TeamList";

export default function Teams({ staff }) {
  return (
    <div>
      <MakeTeam staff={staff} />
      <TeamList />
    </div>
  );
}
