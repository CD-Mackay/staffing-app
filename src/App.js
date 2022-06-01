import "./App.css";

// Asset Imports
import { useEffect, useState } from "react";
import { getAllStaff } from "./utilities/db-helpers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <div className="layout">
            <Route path="/">
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
            </Route>
            <Route path="/new">
              <div>I am /new</div>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
