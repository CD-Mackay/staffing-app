import React from "react";
import CustomInput from "../Input/CustomInput";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const { name, department, skills } = employee;
  return (
    <StyledStaffCard>
        <div className="image-wrapper">
          <img src="images/ongo-gablogian.jpg" alt="ongo gablogian" />
        </div>
        <div className="employee-info">
          <h4>name: {name}</h4>
          <p>Department: {department}</p>
        </div>
        <div className="employee-info">
          <p>Skills:</p>
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
      </div>
      <CustomInput />
    </StyledStaffCard>
  );
};

export default StaffCard;
