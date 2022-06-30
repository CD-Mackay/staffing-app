import styled from "styled-components";

const StyledSkillBadge = styled.li`
  background-color: gray;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 2px;
  max-width: 200px;
  span {
    margin: 5px;
  }
  .badge-button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    button {
      background: none;
      border: 1px solid gray;
      border-radius: 10px;
      margin-left: 2px;
    }
    button:hover {
      border: 1px solid black;
    }
  }
`;

export default StyledSkillBadge;
