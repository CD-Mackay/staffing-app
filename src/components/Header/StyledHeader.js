import styled from 'styled-components';

const StyledHeader = styled.div`
position: fixed;
top: 0;
width: 100vw;
display: flex;
justify-content: space-between;
border: 1px solid gray;
background-color: white;
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
    padding: 5px;
    margin: 2px;
    border: 1px solid gray;
    border-radius: 10px;
  }
}
`;

export default StyledHeader;