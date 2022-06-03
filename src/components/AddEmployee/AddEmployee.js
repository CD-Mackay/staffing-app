import React, { useRef } from "react";

import { AddEmployee } from "../../utilities/db-helpers";

import StyledAddEmployee from "./StyledAddEmployee";

export default function AddEmployeeForm() {
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const deptInputRef = useRef();
  const superiorInputRef = useRef();

  const handleAddEmployee = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const title = titleInputRef.current.value;
    const department = deptInputRef.current.value;
    const superior = superiorInputRef.current.value;

    const newEmployeeObect = {
      name,
      title,
      department,
      superior
    };
    AddEmployee(newEmployeeObect);
  };


  return (
    <StyledAddEmployee>
      <h4>Add New Employee</h4>
      <form onSubmit={(e) => handleAddEmployee(e)}>
        <div className="employee-input">
          <input type="text" placeholder="First name" ref={nameInputRef} />
          {/* <input type="text" placeholder="Last Name" /> */}
        </div>
        <div className="employee-input">
          <input type="text" placeholder="employee title" ref={titleInputRef} />
          <input type="text" placeholder="department" ref={deptInputRef} />
          <input type="text" placeholder="reports to" ref={superiorInputRef} />
        </div>
        <input type="submit" />
        <div className="skills-input">
          {/* <form>
            <input type="text" placeholder="skill" />
          </form> */}
        </div>
      </form>
    </StyledAddEmployee>
  );
}
