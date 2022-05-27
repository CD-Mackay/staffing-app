import React, { useState } from "react";
import FlagButton from "../FlagButton/FlagButton";
import CustomInput from "../Input/CustomInput";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const { name, department, skills, id, flag } = employee;
  const [employeeSkills, setEmployeeSkills] = useState(skills);

  const handleAddSkill = (input) => {
    let skillsArray = [...employeeSkills];
    skillsArray.push(input);
    setEmployeeSkills(skillsArray);
  };

  return (
    <StyledStaffCard flag={flag}>
      <div className="image-wrapper">
        <img src="images/ongo-gablogian.jpg" alt="ongo gablogian" />
      </div>
      <div className="employee-header">
        <h4>{name}</h4>
      </div>
      <div className="employee-info">
        <div>
      {department && <p>Department: {department}</p>}
        <p>Skills:</p>
        <ul>
          {employeeSkills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
        <CustomInput employeeId={id} onSubmit={handleAddSkill} />
        </div>
        <div>
          <FlagButton />
        </div>
      </div>
    </StyledStaffCard>
  );
};

export default StaffCard;
