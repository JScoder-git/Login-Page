import React from "react";
import "./App.css";
import { LeftBox } from "./Components/LeftBox";
import { RightBox } from "./Components/RightBox";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="flex">
      <LeftBox />
      <RightBox />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
