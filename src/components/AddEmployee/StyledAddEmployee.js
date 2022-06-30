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
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
  }

  .skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 40%;
  }

  .skills-input {
    margin-top: 40px;
    text-align: center;
  }
  .employee-input {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0px;
    max-width: 40%;
    min-width: 30%;
    padding: 10px;
    label {
      margin-bottom: 5px;
    }
    input {
      border: 1px solid gray;
      border-radius: 5px;
      line-height: 1.5;
      padding: 5px;
    }
  }
  #new-employee-button {
    background-color: #bdf0c9;
    border-radius: 5px;
    border: none;
    margin-top: 40px;
    padding: 15px;
  }

  #new-employee-button:hover {
    background-color: #a9d6b4;
  }
`;

export default StyledAddEmployee;
