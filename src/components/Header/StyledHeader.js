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
      display: none;
    }
  }
  .nav {
    display: flex;
    padding: 5px;
    a {
      text-decoration: none;
    }
    p {
      border: 1px solid gray;
      border-radius: 10px;
      color: black;
      margin: 2px;
      padding: 5px;
      text-decoration: none;
    }
    p:hover {
      color: white;
      background-color: gray;
    }
  }

  #logo-link {
    color: black;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    .logo {
      h4 {
        display: inline;
        font-size: 24px;
        font-style: italic;
        margin: 0px;
        margin-top: 5px;
      }
    }
  }
`;

export default StyledHeader;
