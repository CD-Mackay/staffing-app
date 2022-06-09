import "./App.css";

// Asset Imports
import { useEffect, useState } from "react";
import { getAllStaff } from "./utilities/db-helpers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import Teams from "./pages/Teams";

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="layout">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  parameter={parameter}
                  setParameter={setParameter}
                  staff={staff}
                />
              }
            />
            <Route path="/new" element={<NewEmployee />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
