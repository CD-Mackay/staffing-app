import styled from "styled-components";

const StyledAddEmployee = styled.div`

.first-row {
  display: flex;
  justify-content: center;
}
.employee-input {
  width: 30%;
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