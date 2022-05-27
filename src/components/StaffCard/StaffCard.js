import React, { useState } from "react";
import FlagButton from "../FlagButton/FlagButton";
import CustomInput from "../Input/CustomInput";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const { name, department, skills, id, flag, superior, title } = employee;
  const [employeeSkills, setEmployeeSkills] = useState(skills);
  const [flagged, setFlagged] = useState(flag)

  const handleAddSkill = (input) => {
    let skillsArray = [...employeeSkills];
    skillsArray.push(input);
    setEmployeeSkills(skillsArray);
  };

  return (
    <StyledStaffCard flag={flagged}>
      <div className="image-wrapper">
        <img src="images/ongo-gablogian.jpg" alt="ongo gablogian" />
      </div>
      <div className="employee-header">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
      <div className="employee-info">
        <div>
      {department && <p>Department: {department}</p>}
        <p>Reports to: {superior ? superior : "no one"} </p>
        <ul>
          {employeeSkills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
        <CustomInput employeeId={id} onSubmit={handleAddSkill} />
        </div>
        <div>
          <FlagButton flag={flagged} setFlag={setFlagged} />
        </div>
      </div>
    </StyledStaffCard>
  );
};

export default StaffCard;
