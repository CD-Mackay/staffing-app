import styled from 'styled-components';

const StyledSearchBar = styled.div`
width: 90%;
margin: 0 auto;
display: grid;
grid-template-columns: 4fr 1fr;
padding: 5px;
justify-content: space-between;
border: 1px solid black;
border-radius: 10px;
input {
  width: 90%;
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
`;

export default StyledSearchBar;