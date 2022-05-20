import logo from "./logo.svg";
import "./App.css";

// Asset Imports
import staff from "../src/utilities/dummy-data";

function App() {
  return (
    <div className="App">
      <ul>
        {staff.map((employee) => {
          return <li>{employee.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
