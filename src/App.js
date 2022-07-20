import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./views/Home";
import CreateProject from "./views/CreateProject/";
import Project from "./views/Project";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import Documentation from './views/Documentation'

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:address" element={<Project />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
