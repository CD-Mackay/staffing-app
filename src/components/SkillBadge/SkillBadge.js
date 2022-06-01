import React from "react";

import StyledSkillBadge from "./StyledSkillBadge";

const SkillBadge = ({ skill }) => {
  return (
    <StyledSkillBadge>
      <div>{skill}</div>
      <button>x</button>
    </StyledSkillBadge>
  );
};

export default SkillBadge;
