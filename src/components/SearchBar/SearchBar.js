import React from "react";

import StyledSearchBar from "./StyledSearchBar";

// Component Imports

const SearchBar = ({
  parameter,
  setParameter,
  searchValue,
  setSearchValue,
}) => {
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  return (
    <StyledSearchBar>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={onChangeInput}
          placeholder="Search for something!"
        />
      </div>
      <div id="select-input">
        <label htmlFor="parameters">Search By...</label>
        <select
          name="parameters"
          value={parameter}
          onChange={onChangeParameter}
          id="parameters"
        >
          <option value="name">Name</option>
          <option value="department">Department</option>
          <option value="skills">Skills</option>
        </select>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
