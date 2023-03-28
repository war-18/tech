import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hawkrace from "./components/sample_page/Hawkmore";
import Brocodemore from "./components/sample_page/Brocodemore";
import Cadmaster from "./components/sample_page/Cadmaster";
import Cadocreatemore from "./components/sample_page/Cadocreatemore";
import Codecombactmore from "./components/sample_page/Codecombatmore";
import Expeditionmore from "./components/sample_page/Expeditionmore";
import Nirmitimore from "./components/sample_page/Nirmitimore";
import Rocketleague from "./components/sample_page/Rocketleaguemore"
import Papermore from "./components/sample_page/Papermore";
import Quizotronicsmore from "./components/sample_page/Quizotronicsmore";
import Robomore from "./components/sample_page/Robomore";
import Rocketleaguemore from "./components/sample_page/Rocketleaguemore";
import Survivemore from "./components/sample_page/Survivemore";
import Technofire from "./components/sample_page/Technofire";
import Unleash2k23 from "./components/sample_page/Unleash2k23"
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/hawkrace"  element={<Hawkrace /> }></Route>
        <Route exact path="/rocketleague" element={<Rocketleague />}></Route>
        <Route exact path="/roborace" element={<Robomore />}></Route>
        <Route exact path="/thebrocode" element={<Brocodemore/>}></Route>
        <Route exact path="/cadmaster" element={<Cadmaster />}></Route>
        <Route exact path="/Codecombat" element={<Codecombactmore />}></Route>
        <Route exact path="/cadocreate" element={<Cadocreatemore />}></Route>
        <Route exact path="/Expeditionhunt" element={<Expeditionmore />}></Route>
        <Route exact path="/Nirmiti" element={<Nirmitimore />}></Route>
        <Route exact path="/Paperpresentation" element={<Papermore />}></Route>
        <Route exact path="/Quizotronics" element={<Quizotronicsmore />}></Route>
        <Route exact path="/Robomore" element={<Robomore />}></Route>
        <Route exact path="/Rocketleague" element={<Rocketleaguemore />}></Route>
        <Route exact path="/Survivethefall" element={<Survivemore />}></Route>
        <Route exact path="/Technofire" element={<Technofire />}></Route>
        <Route exact path="/Unleash2k23" element={<Unleash2k23 />}></Route>
       
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>Under Construction</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
