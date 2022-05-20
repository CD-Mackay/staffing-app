import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";

// Component imports
import StaffList from "./components/StaffList/StaffList";

function App() {
  return (
      <div className="App">
        <StaffList staff={staff} />
      </div>
  );
}

export default App;
