import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectsList from "./components/ProjectsList";
import Header from "./components/Header";
import FormCreateProject from "./components/FormCreateProject/FormCreateProject";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<ProjectsList />} />
            <Route path="/create-project" element={<FormCreateProject />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
