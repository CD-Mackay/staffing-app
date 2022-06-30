import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: white;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  .logo {
    display: flex;
    h4 {
      font-size: 24px;
      font-style: italic;
      margin: 0px;
      margin-top: 5px;
    }
  }
  .nav {
    display: flex;
    padding: 5px;
    p {
      border: 1px solid gray;
      border-radius: 10px;
      color: black;
      margin: 2px;
      padding: 5px;
      text-decoration: none;
    }
  }

  #logo-link {
    color: black;
    text-decoration: none;
  }
`;

export default StyledHeader;
