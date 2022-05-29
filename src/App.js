import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";
import { useState } from "react";

// Component imports
import StaffList from "./components/StaffList/StaffList";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [parameter, setParameter] = useState("name");

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
        parameter={parameter}å
        searchValue={searchValue}
      />
    </div>
  );
}

export default App;
