import styled from "styled-components";

const StyledSearchBar = styled.div`
  border: 1px solid gray;
  background-color: white;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: space-between;
  padding: 5px;
  position: fixed;
  top: 5vh;
  max-width: inherit;
  input {
    width: 80%;
    line-height: 1.5;
    font-size: 22px;
    border-radius: 5px;
    border: none;
  }

  #select-input {
    display: flex;
    select {
      border-radius: 10px;
    }
  }

  @media (min-width: 992px) {
    top: 10vh;
    input {
      width: 90%;
    }
  }
`;

export default StyledSearchBar;
