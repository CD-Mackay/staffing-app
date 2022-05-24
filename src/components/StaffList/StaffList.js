import React from "react";

import StyledStaffList from "./StyledStaffList";

// Component Imports
import StaffCard from "../StaffCard/StaffCard";

// Asset Imports
import { filterByDept, filterByName } from "../../utilities/helpers";

const StaffList = ({ staff, searchValue, parameter }) => {

  const renderStaffList = () => {
    if (parameter === "name") {
      staff = filterByName(staff, searchValue);
    }
    if (parameter === "department") {
      staff = filterByDept(staff, searchValue);
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