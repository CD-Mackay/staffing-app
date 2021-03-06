import React, { useContext, useRef, useState } from "react";

import { AddEmployee } from "../../utilities/db-helpers";
import SkillBadge from "../SkillBadge/SkillBadge";
import Button from "../../Button/Button";

import StyledAddEmployee from "./StyledAddEmployee";
import AlertContext from "../../Context/AlertContext";

export default function AddEmployeeForm() {
  const alertObject = useContext(AlertContext);
  const { setAlert } = alertObject;
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const deptInputRef = useRef();
  const superiorInputRef = useRef();
  const skillInputRef = useRef();
  const [skillList, setSkillList] = useState([]);

  async function handleAddEmployee(event) {
    event.preventDefault();
    if (event.target.keyCode === 13) {
      return;
    }

    const name = nameInputRef.current.value;
    const title = titleInputRef.current.value;
    const department = deptInputRef.current.value;
    const superior = superiorInputRef.current.value;

    if (name === "" || title === "" || department === "" || superior === "") {
      setAlert({
        color: "#f66359",
        message: "All fields are required",
        timer: true,
      });
      return;
    }

    const newEmployeeObect = {
      name,
      title,
      department,
      superior,
      skills: skillList,
    };
    const response = await AddEmployee(newEmployeeObect);
    skillInputRef.current.value = "";
    titleInputRef.current.value = "";
    deptInputRef.current.value = "";
    nameInputRef.current.value = "";
    superiorInputRef.current.value = "";
    if (response) {
      setAlert({
        color: "green",
        message: `New Employee ${name} has been added to the staff!`,
        timer: true,
      });
    }
  }

  const handleAddSkill = () => {
    let skillCopy = [...skillList];
    const newSkill = skillInputRef.current.value;
    skillCopy.push(newSkill);
    setSkillList(skillCopy);
    skillInputRef.current.value = "";
  };

  const handleRemoveSkill = (skill) => {
    let skillCopy = [...skillList];
    skillCopy = skillCopy.filter((element) => element !== skill);
    setSkillList(skillCopy);
  };

  return (
    <StyledAddEmployee>
      <div className="new-header">
        <h4>Add New Employee</h4>
      </div>
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
          <div className="skills-input">
            <p>
              *Optional: Use this section to tag any specific
              skills/qualifications this employee possesses
            </p>
            <div className="skills-wrapper">
              {skillList &&
                skillList.map((skill) => {
                  return (
                    <SkillBadge
                      onDelete={handleRemoveSkill}
                      key={skill}
                      skill={skill}
                    />
                  );
                })}
            </div>
            <input type="text" placeholder="skill" ref={skillInputRef} />
            <Button handler={handleAddSkill} message="Add" />
          </div>
          <button id="new-employee-button" onClick={handleAddEmployee}>
            Add employee
          </button>
        </div>
      </form>
    </StyledAddEmployee>
  );
}
