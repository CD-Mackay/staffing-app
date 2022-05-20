import React from "react";

import StyledStaffCard from "./styledStaffCard";

const StaffCard = ({ name }) => {
  return (
    <StyledStaffCard>
      <li>{name}</li>
    </StyledStaffCard>
  );
};

export default StaffCard;
