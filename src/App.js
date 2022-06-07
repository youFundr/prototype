import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ethers } from "ethers";
import { youfundrABI, youfundrAddress, projectABI } from "./constants";
import ProjectCardContainer from "./components/ProjectCardContainer";
import Header from "./components/Header";
import FormCreateProject from "./components/FormCreateProject/FormCreateProject";
import "./App.css";

const normalizeProjectDetails = ({
  projectAddress,
  fundStarter,
  fundName,
  fundDescription,
  deadline,
  currentState,
  currentAmount,
  goal,
  donator,
}) => ({
  projectAddress,
  fundStarter,
  fundName,
  fundDescription,
  deadline: new Date(deadline.toNumber()).toLocaleDateString(),
  currentState,
  currentAmount: ethers.utils.formatEther(currentAmount),
  goal: ethers.utils.formatEther(goal),
  donator,
});

function App() {
  const [fetchProjects, setFetchProjects] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [projects, setProjects] = useState([]);
  const [youfundrContract, setYoufundrContract] = useState(null);

  useEffect(
    () => {
      function handleEffect() {
        youfundrContract.on("fundStarted", () => {
          setFetchProjects(true);
        });
      }
      if (youfundrContract) {
        handleEffect();
      }
    },
    [youfundrContract],
    () => {
      youfundrContract.removeAllListeners("fundStarted");
    }
  );

  const handleConnect = async () => {
    try {
      const connection = new ethers.providers.Web3Provider(window.ethereum);
      await connection.send("eth_requestAccounts", []);
      setProvider(connection);
      const signer = connection.getSigner();
      setSigner(signer);
      const contract = new ethers.Contract(
        youfundrAddress,
        youfundrABI,
        signer
      );
      setYoufundrContract(contract);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function handleEffect() {
      youfundrContract
        .allProjects()
        .then(async (addresses) => {
          const projectDetails = await Promise.all(
            addresses.map(async (address) => {
              try {
                const project = new ethers.Contract(
                  address,
                  projectABI,
                  provider
                );
                const [
                  projectAddress,
                  fundStarter,
                  fundName,
                  fundDescription,
                  deadline,
                  currentState,
                  currentAmount,
                  goal,
                  donator,
                ] = await project.details();

                return normalizeProjectDetails({
                  projectAddress,
                  fundStarter,
                  fundName,
                  fundDescription,
                  deadline,
                  currentState,
                  currentAmount,
                  goal,
                  donator,
                });
              } catch (err) {
                console.error(err);
              }
            })
          ).catch((err) => console.error);

          setProjects(projectDetails);
          setFetchProjects(false);
        })
        .catch((err) => console.error);
    }
    if (youfundrContract && provider && fetchProjects) {
      handleEffect();
    }
  }, [provider, youfundrContract, fetchProjects]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header provider={provider} handleConnect={handleConnect}></Header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<ProjectCardContainer projects={projects} />}
            />
            <Route
              path="/create-project"
              element={
                <FormCreateProject youfundrContract={youfundrContract} />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
