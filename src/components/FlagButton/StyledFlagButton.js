import styled from 'styled-components';

const StyledFlagButton = styled.div`
display: flex;
flex-direction: column;
button {
  background: none; 
  border: none;
  color: gray;
}
button:hover {
  cursor: pointer;
  color: black;
}
`;

export default StyledFlagButton;