import React from "react";

import StyledSkillBadge from "./StyledSkillBadge";

const SkillBadge = ({ skill }) => {
  return (
    <StyledSkillBadge>
      <span>{skill}</span>
      <div className="badge-button">
      <button>x</button>
      </div>
    </StyledSkillBadge>
  );
};

export default SkillBadge;
