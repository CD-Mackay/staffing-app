import React from "react";

import StyledTeamCard from "./StyledTeamCard";

const TeamCard = ({ name, lead, team }) => {
  const Listing = ({ name }) => {
    return (
      <li>
        <div className="employee-listing">
          <p>{name}</p>
          <div>
            <button>view employee</button>
            <button>remove from team</button>
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
        <button>Delete team</button>
      </div>
      <ul>
        {team &&
          team.map((element) => {
            return <Listing name={element} />;
          })}
        {!team && <li>No members in this team</li>}
      </ul>
    </StyledTeamCard>
  );
};

export default TeamCard;
