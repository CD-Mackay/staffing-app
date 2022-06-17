import React, { useState } from "react";
import FlagButton from "../FlagButton/FlagButton";
import CustomInput from "../Input/CustomInput";
import SkillBadge from "../SkillBadge/SkillBadge";
import { updateSKill, deleteEmployee } from "../../utilities/db-helpers";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const { name, department, skills, id, flag, superior, title } = employee;
  const [employeeSkills, setEmployeeSkills] = useState(skills ? skills : []);
  const [flagged, setFlagged] = useState(flag === "null" ? null : flag);

  const handleAddSkill = (input) => {
    let skillsArray = [...employeeSkills];
    skillsArray.push(input);
    setEmployeeSkills(skillsArray);
    updateSKill(id, skillsArray);
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
        <button className="delete-button" onClick={() => deleteEmployee(id)}>
          delete
        </button>
      </div>
      <div className="employee-info">
        <div>
          {department && <p>Department: {department}</p>}
          {superior && <p>Reports to: {superior} </p>}
          <ul>
            {employeeSkills &&
              employeeSkills.map((skill) => {
                return (
                  <SkillBadge
                    onDelete={handleRemoveSkill}
                    key={skill}
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
