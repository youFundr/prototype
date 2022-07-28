import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./views/Home";
import CreateProject from "./views/CreateProject/";
import Documentation from './views/Documentation'
import Project from "./views/Project";
import Projects from "./views/Projects";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/project/:address" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
