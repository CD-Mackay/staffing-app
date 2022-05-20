import React from "react";

import StyledStaffList from "./StyledStaffList";

// Component Imports
import StaffCard from "../StaffCard/StaffCard";

const StaffList = ({ staff }) => {
  return (
    <StyledStaffList>
      <ul>
      {staff.map((employee) => {
          return <StaffCard name={employee.name} />;
        })}
      </ul>
    </StyledStaffList>
  );
};

export default StaffList;