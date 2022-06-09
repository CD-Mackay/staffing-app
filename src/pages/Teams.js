import React from "react";
import MakeTeam from "../components/MakeTeam/MakeTeam";

export default function Teams({staff}) {
  return (
    <div>
      <MakeTeam staff={staff} />
    </div>
  );
}
