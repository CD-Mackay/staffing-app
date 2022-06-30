import styled from "styled-components";

const StyledTeamCard = styled.div`
  background-color: ${(props) => (props.remaining < 1 ? "#f66359" : "none")};
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  ul {
    list-style-type: none;
  }

  .team-header {
    display: flex;
    justify-content: space-between;
  }

  .employee-listing {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    max-width: 200px;
    div {
      display: flex;
      flex-direction: column;
      button {
        margin-bottom: 5px;
      }
    }
  }

  .time {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledTeamCard;
