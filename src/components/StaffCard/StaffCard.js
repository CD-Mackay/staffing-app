import React, { useState, useContext } from "react";
import FlagButton from "../FlagButton/FlagButton";
import CustomInput from "../Input/CustomInput";
import SkillBadge from "../SkillBadge/SkillBadge";
import { updateSKill, deleteEmployee } from "../../utilities/db-helpers";
import AlertContext from "../../Context/AlertContext";
import { ImCross } from 'react-icons/im';

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;
  const { name, department, skills, id, flag, superior, title } = employee;
  const [employeeSkills, setEmployeeSkills] = useState(skills ? skills : []);
  const [flagged, setFlagged] = useState(flag === "null" ? null : flag);

  const handleAddSkill = (input) => {
    let skillsArray = [...employeeSkills];
    skillsArray.push(input);
    setEmployeeSkills(skillsArray);
    updateSKill(id, skillsArray);
  };

  const handleDeleteEmployee = () => {
    setAlert({
      color: "green",
      message: `${name} has been removed from your Staffify list`,
      timer: true,
    });
    deleteEmployee(id);
  };

  const confirmDeleteEmployee = () => {
    setAlert({
      message: (
        <span>
          This is permant, are you sure?{" "}
          <button onClick={() => handleDeleteEmployee()}>oui</button>
          <button onClick={() => setAlert("")}>non</button>
        </span>
      ),
      color: "#f66359",
      timer: false,
    });
  };

  const handleRemoveSkill = (input) => {
    let skillsArray = [...employeeSkills];
    let updatedSkills = skillsArray.filter((skill) => skill !== input);
    setEmployeeSkills(updatedSkills);
    updateSKill(id, updatedSkills);
  };

  return (
    <StyledStaffCard flag={flagged}>
      <div className="image-wrapper">
        <img src="images/ongo-gablogian.jpg" alt="ongo gablogian" />
      </div>
      <div className="employee-header">
        <div>
          <h4>{name}</h4>
          <p> - {title}</p>
        </div>
        <button className="delete-button" onClick={confirmDeleteEmployee}>
          <ImCross />
        </button>
      </div>
      <div className="employee-info">
        <div>
          {department && <p>Department: {department}</p>}
          {superior && <p>Reports to: {superior} </p>}
          <ul>
            {employeeSkills &&
              employeeSkills.map((skill, index) => {
                return (
                  <SkillBadge
                    onDelete={handleRemoveSkill}
                    key={index}
                    skill={skill}
                  />
                );
              })}
          </ul>
          <CustomInput employeeId={id} onSubmit={handleAddSkill} />
        </div>
        {flagged && (
          <div className="flag-info">
            <p>You have flagged this employee.</p>
          </div>
        )}
        <div>
          <FlagButton flag={flagged} userId={id} setFlag={setFlagged} />
        </div>
      </div>
    </StyledStaffCard>
  );
};

export default StaffCard;
