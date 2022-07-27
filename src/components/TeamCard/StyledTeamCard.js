import styled from "styled-components";

const StyledTeamCard = styled.div`
  background-color: ${(props) => (props.remaining < 1 ? "#f66359" : "none")};
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px;
  padding: 5px;
  ul {
    list-style-type: none;
  }

  .team-header {
    display: flex;
    justify-content: space-between;
  }

  .team-grid {
    display: flex;
    flex-direction: column;
    ul {
      margin: 0px;
    }
  }

  .employee-listing {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
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
    justify-content: flex-start;
    span {
      font-weight: 500;
    }
    time {
      margin: 5px;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    .team-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
`;

export default StyledTeamCard;
