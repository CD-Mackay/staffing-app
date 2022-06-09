import React, { useRef, useState } from "react";

import { AddEmployee } from "../../utilities/db-helpers";
import SkillBadge from "../SkillBadge/SkillBadge";

import StyledAddEmployee from "./StyledAddEmployee";

export default function AddEmployeeForm() {
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const deptInputRef = useRef();
  const superiorInputRef = useRef();
  const skillInputRef = useRef();
  const [skillList, setSkillList] = useState([]);

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
      superior,
    };
    AddEmployee(newEmployeeObect);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    let skillCopy = [...skillList];
    const newSkill = skillInputRef.current.value;
    skillCopy.push(newSkill);
    setSkillList(skillCopy);
    skillInputRef.current.value = "";
  };

  return (
    <StyledAddEmployee>
      <h4>Add New Employee</h4>
      <form onSubmit={(e) => handleAddEmployee(e)}>
        <div className="first-row">
          <div className="employee-input">
            <label htmlFor="name">Employee Name</label>
            <input type="text" placeholder="First name" ref={nameInputRef} />
            {/* <input type="text" placeholder="Last Name" /> */}
          </div>
          <div className="employee-input">
            <label htmlFor="title">Employee Role</label>
            <input
              type="text"
              id="title"
              placeholder="employee title"
              ref={titleInputRef}
            />
          </div>
        </div>
        <div className="input-wrapper">
        <div className="employee-input">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            placeholder="department"
            id="department"
            ref={deptInputRef}
          />
        </div>
        <div className="employee-input">
          <label htmlFor="superior">Reports to</label>
          <input
            type="text"
            placeholder="reports to"
            id="superior"
            ref={superiorInputRef}
          />
        </div>
        </div>
        <input type="submit" />
      </form>
      <div className="skills-input">
        <form onSubmit={(e) => handleAddSkill(e)}>
          <input type="text" placeholder="skill" ref={skillInputRef} />
          <input type="submit" />
        </form>
        {skillList &&
          skillList.map((skill) => {
            return <SkillBadge skill={skill} />;
          })}
      </div>
    </StyledAddEmployee>
  );
}
