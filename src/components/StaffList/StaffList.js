import React from "react";

import StyledStaffList from "./StyledStaffList";

// Component Imports
import StaffCard from "../StaffCard/StaffCard";

const StaffList = ({ staff, searchValue }) => {

  const renderStaffList = () => {
    if (searchValue) {
      staff = staff.filter((employee) => {
       return employee.name.toLowerCase().includes(searchValue.toLowerCase())
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