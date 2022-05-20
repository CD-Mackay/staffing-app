import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";

// Component imports
import StaffCard from "./components/StaffCard/StaffCard";

function App() {
  return (
    <div className="App">
      <ul>
        {staff.map((employee) => {
          return <StaffCard name={employee.name} />;
        })}
      </ul>
    </div>
  );
}

export default App;
