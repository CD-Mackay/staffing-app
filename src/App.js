import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";

// Component imports
import StaffList from "./components/StaffList/StaffList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
      <div className="App">
        <SearchBar />
        <StaffList staff={staff} />
      </div>
  );
}

export default App;
