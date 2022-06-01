import "./App.css";

// Asset Imports
import { useEffect, useState } from "react";
import { getAllStaff } from "./utilities/db-helpers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header/Header";
import Home from "./pages/Home";

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
            <Route path="/new" element={<p>I am new</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
