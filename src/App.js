import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";
import { useState } from 'react';

// Component imports
import StaffList from "./components/StaffList/StaffList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  const [parameter, setParameter] = useState("");

  return (
      <div className="App">
        <SearchBar parameter={parameter} setParameter={setParameter} />
        <StaffList staff={staff} parameter={parameter} />
      </div>
  );
}

export default App;
