import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Forms from "./pages/Forms";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/authentication" element={<Forms />} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
