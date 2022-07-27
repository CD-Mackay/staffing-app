import styled from "styled-components";

const StyledSearchBar = styled.div`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: space-between;
  max-width: inherit;
  padding: 5px;
  position: fixed;
  top: 5vh;
  width: 94vw;
  input {
    border-radius: 5px;
    border: none;
    font-size: 20px;
    line-height: 1.5;
    width: 98%;
  }

  #select-input {
    display: flex;
    select {
      border-radius: 10px;
      margin-left: 5px;
    }
  }

  @media (min-width: 768px) {
    width: 89vw;
  }

  @media (min-width: 992px) {
    width: 890px;
    top: 10vh;
    input {
      font-size: 22px;
    }
  }
`;

export default StyledSearchBar;
