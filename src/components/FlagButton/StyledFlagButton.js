import styled from "styled-components";

const StyledFlagButton = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background: none;
    border: none;
  }
  button:hover {
    cursor: pointer;
  }

  .green-button {
    color: green;
  }
  .green-button:hover {
    color: #bdf0c9;
  }
  .red-button {
    color: red;
  }
  .red-button:hover {
    color: #f0c9cd;
  }
`;

export default StyledFlagButton;
