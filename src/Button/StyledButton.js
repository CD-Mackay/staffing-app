import styled from "styled-components";

const StyledButton = styled.div`
  display: inline;
  margin: 2px;
  button {
    background: white;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 3px;
  }
  button:hover {
    background-color: gray;
    color: white;
  }
`;

export default StyledButton;
