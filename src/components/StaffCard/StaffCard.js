import React from "react";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ employee }) => {
  const { name, department, skills } = employee;
  return (
    <StyledStaffCard>
        <div className="image-wrapper">
          <img src="images/ongo-gablogian.jpg" alt="ongo gablogian" />
        </div>
        <div>
          <h4>name: {name}</h4>
          <p>Department: {department}</p>
        </div>
        <div className="employee-info">
        <ul>
          {skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
    </StyledStaffCard>
  );
};

export default StaffCard;
