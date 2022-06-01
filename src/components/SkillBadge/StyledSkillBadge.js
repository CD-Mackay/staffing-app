import styled from "styled-components";

const StyledSkillBadge = styled.li`
  background-color: gray;
  margin: 2px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  button {
    background: none;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 2px;
  }
  button:hover {
    background-color: red;
  }
`;

export default StyledSkillBadge;
