import styled from 'styled-components';

const StyledSearchBar = styled.div`
width: 90%;
margin: 0 auto;
display: grid;
grid-template-columns: 4fr 1fr;
padding: 2px;
justify-content: space-between;
input {
  width: 90%;
  line-height: 1.5;
  font-size: 22px;
  border-radius: 5px;
}

#select-input {
  display: flex;
}
`;

export default StyledSearchBar;