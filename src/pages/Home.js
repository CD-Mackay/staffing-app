import React from "react";


import SearchBar from "../components/SearchBar/SearchBar";
import StaffList from "../components/StaffList/StaffList";

export default function Home({
  searchValue,
  setSearchValue,
  parameter,
  setParameter,
  staff,
}) {
  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        parameter={parameter}
        setParameter={setParameter}
      />
      <StaffList
        staff={staff}
        parameter={parameter}
        searchValue={searchValue}
      />
    </div>
    
  );
}
