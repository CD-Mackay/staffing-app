import React from "react";

import StyledSearchBar from "./StyledSearchBar";

// Component Imports

const SearchBar = ({parameter, setParameter, searchValue, setSearchValue}) => {


  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onChangeParameter = (event) => {
    setParameter(event.target.value);
  } 
  
  return (
    <StyledSearchBar>
      <input type="text" value={searchValue} onChange={onChangeInput} placeholder="Search for something!" />
      <label htmlFor="parameters">Search By...</label>
      <select name="parameters" value={parameter} onChange={onChangeParameter} id="parameters">
        <option value="name">Name</option>
        <option value="department">department</option>
        <option value="skills">Skills</option>
      </select>
    </StyledSearchBar>
  );
};

export default SearchBar;
