import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Allcomponent from "./components/Allcomponent";
import ComponentClubInfo from "./components/componentsInfo/ComponentClubInfo";

const App = () => {
  return (
    <>
      <>
        <Routes>
          <Route exact path="/" element={<Allcomponent />} />
          <Route path="/club" element={<ComponentClubInfo />} />
        </Routes>
      </>
    </>
  );
};

export default App;
