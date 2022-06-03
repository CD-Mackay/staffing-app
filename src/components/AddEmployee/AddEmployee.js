import React, { useRef } from "react";

import StyledAddEmployee from "./StyledAddEmployee";

export default function AddEmployee() {
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const deptInputRef = useRef();
  const superiorInputRef = useRef();
  return (
    <StyledAddEmployee>
      <h4>Add New Employee</h4>
      <form>
        <div className="employee-input">
          <input type="text" placeholder="First name" ref={nameInputRef} />
          {/* <input type="text" placeholder="Last Name" /> */}
        </div>
        <div className="employee-input">
          <input type="text" placeholder="employee title" ref={titleInputRef} />
          <input type="text" placeholder="department" ref={deptInputRef} />
          <input type="text" placeholder="reports to" ref={superiorInputRef} />
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
