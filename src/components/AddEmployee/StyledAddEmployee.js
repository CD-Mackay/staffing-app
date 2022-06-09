import styled from "styled-components";

const StyledAddEmployee = styled.div`

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
`;

export default StyledAddEmployee;