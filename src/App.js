import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";
import { useEffect, useState } from "react";
import { getAllStaff } from "./utilities/db-helpers";

// Component imports
import StaffList from "./components/StaffList/StaffList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [parameter, setParameter] = useState("name");
  const [staff, setStaff] = useState([]);


  const makeStaffList = async () => {
    let result = await getAllStaff();
    console.log(result);
  };

  makeStaffList();




  

  return (
    <div className="App">
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

export default App;
