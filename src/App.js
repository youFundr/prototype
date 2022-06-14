import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./views/Home";
import CreateProject from "./views/CreateProject/";
import Project from "./views/Project";
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
          <Route path="/project/:address" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
