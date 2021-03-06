import React, { useContext, useEffect, useState } from "react";

import Button from "../../Button/Button";
import { deleteTeam, updateTeam } from "../../utilities/db-helpers";
import AlertContext from "../../Context/AlertContext";
import { dateCountDown } from "../../utilities/helpers";

import StyledTeamCard from "./StyledTeamCard";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ name, lead, team, id, deadline }) => {
  const navigate = useNavigate();
  const [teamState, setTeamState] = useState(team);
  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;

  const timeTillDeadline = dateCountDown(deadline);
  const { days, weeks } = timeTillDeadline;

  const handleRemoveFromTeam = (employeeId, employeeName) => {
    let teamListing = [...team];
    teamListing = teamListing.filter((employee) => {
      return employee.id !== employeeId;
    });

    updateTeam(id, teamListing);
    setTeamState(teamListing);
    setAlert({
      color: "green",
      message: `${employeeName} has been removed from ${name}`,
      timer: true,
    });
  };

  const handleDeleteTeam = (teamId, name) => {
    deleteTeam(teamId);
    setAlert({
      color: "green",
      message: `${name} has been deleted`,
      timer: true,
    });
  };

  const handleViewEmployee = (id) => {
    navigate(`/${id}`);
  };

  const confirmDeleteTeam = () => {
    setAlert({
      message: (
        <span>
          Confirm delete?{" "}
          <Button handler={() => handleDeleteTeam(id, name)} message="oui" />
          <Button handler={() => setAlert("")} message="non" />
        </span>
      ),
      color: "#f66359",
      timer: false,
    });
  };

  useEffect(() => {}, [teamState]);

  const Listing = ({ name, id }) => {
    return (
      <li>
        <div className="employee-listing">
          <p>{name}</p>
          <div>
            <Button
              message="view employee"
              handler={() => handleViewEmployee(id)}
            />
            <Button
              handler={() => handleRemoveFromTeam(id, name)}
              message="remove from team"
            />
          </div>
        </div>
      </li>
    );
  };

  return (
    <StyledTeamCard remaining={timeTillDeadline.weeks}>
      <div className="team-header">
        <h5>
          {name} -- Team Lead: {lead.name}
        </h5>
        <Button handler={() => confirmDeleteTeam()} message="delete team" />
      </div>
      <div className="team-grid">
        <div className="time">
          <span>
            Deadline: <time>{deadline}</time>
          </span>
          <span>
            Due in:{" "}
            <time>
              {weeks} week{weeks <= 1 ? "" : "s"} and {days} day
              {days <= 1 ? "" : "s"}
            </time>{" "}
          </span>
        </div>
        <ul>
          {" "}
          {team &&
            teamState.map((element, index) => {
              return (
                <Listing key={index} id={element.id} name={element.name} />
              );
            })}
          {!team && <li>No members in this team</li>}
        </ul>
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
