import React from "react";

import StyledSkillBadge from "./StyledSkillBadge";

const SkillBadge = ({ skill, onDelete }) => {
  return (
    <StyledSkillBadge>
      <span>{skill}</span>
      <div className="badge-button">
        <button onClick={() => onDelete(skill)}>x</button>
      </div>
    </StyledSkillBadge>
  );
};

export default SkillBadge;
