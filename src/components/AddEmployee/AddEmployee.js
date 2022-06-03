import React from "react";

import StyledAddEmployee from "./StyledAddEmployee";

export default function AddEmployee() {
  return (
    <StyledAddEmployee>
      <form>
        <div className="name-input">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="role-input">
          <input type="text" placeholder="employee title" />
          <input type="text" placeholder="department" />
          <input type="text" placeholder="reports to" />
        </div>
        <div className="skills-input">
          <form>
            <input type="text" placeholder="skill" />
          </form>
        </div>
      </form>
    </StyledAddEmployee>
  );
}
