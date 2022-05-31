import "./App.css";

// Asset Imports
import { useEffect, useState } from "react";
import { getAllStaff } from "./utilities/db-helpers";

// Component imports
import StaffList from "./components/StaffList/StaffList";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [parameter, setParameter] = useState("name");
  const [staff, setStaff] = useState([]);

  const makeStaffList = async () => {
    let result = await getAllStaff();
    setStaff(result);
  };

  useEffect(() => {
    makeStaffList();
  }, []);

  return (
    <div className="App">
            <Header />
      <div className="layout">
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
    </div>
  );
}

export default App;
