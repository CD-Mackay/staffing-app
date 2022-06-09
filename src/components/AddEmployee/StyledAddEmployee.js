import styled from "styled-components";

const StyledAddEmployee = styled.div`
.new-header {
  text-align: center;
  h4 {
    font-size: 28px;
  }
}

.first-row {
  display: flex;
  justify-content: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  align-items: center;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
 
}

.skills-input {
  text-align: center;
  margin-top: 40px;
}
.employee-input {
  max-width: 40%;
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px;
  padding: 10px;
  label {
    margin-bottom: 5px;
  }
  input {
    line-height: 1.5;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid gray;
  }
}
#new-employee-button {
  margin-top: 40px;
  background-color: #BDF0C9;
  border-radius: 5px;
  padding: 15px;
  border: none;
}

#new-employee-button:hover {
  background-color: #A9D6B4;
}
`;

export default StyledAddEmployee;