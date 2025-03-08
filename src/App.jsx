import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout with Header & Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
