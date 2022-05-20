import React from "react";

import StyledStaffList from "./StyledStaffList";

// Component Imports
import StaffCard from "../StaffCard/StaffCard";

const StaffList = ({ staff }) => {
  return (
    <StyledStaffList>
      {staff.map((employee) => {
          return <StaffCard employee={employee} />;
        })}
    </StyledStaffList>
  );
};

export default StaffList;