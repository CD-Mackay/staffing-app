import React from "react";

import StyledStaffList from "./StyledStaffList";

// Component Imports
import StaffCard from "../StaffCard/StaffCard";

const StaffList = ({ staff, parameter }) => {

  const renderStaffList = () => {
    if (parameter) {
      staff = staff.filter((employee) => {
       return employee.name.toLowerCase().includes(parameter.toLowerCase())
      })
    }
    return staff.map((employee) => {
      return <StaffCard employee={employee} />;
    })
  }
  return (
    <StyledStaffList>
      {renderStaffList()}
    </StyledStaffList>
  );
};

export default StaffList;