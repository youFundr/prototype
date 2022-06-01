import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ethers } from "ethers";
import { youfundrABI, youfundrAddress, projectABI } from "./constants";
import ProjectCardContainer from "./components/ProjectCardContainer";
import Header from "./components/Header";
import FormCreateProject from "./components/FormCreateProject/FormCreateProject";
import "./App.css";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [projects, setProjects] = useState([]);
  const [youfundrContract, setYoufundrContract] = useState(null);

  useEffect(
    () => {
      async function handleEffect() {
        provider.once("block", () => {
          youfundrContract.on(
            "fundStarted",
            (
              fundAddress,
              fundStarter,
              fundName,
              fundDescription,
              deadline,
              goal
            ) =>
              setProjects((prevState) => [...prevState, {
                fundAddress,
                fundStarter,
                fundName,
                fundDescription,
                deadline,
                goal
               }])
          );
        });
      }
      if (!!(youfundrContract && provider)) {
        handleEffect();
      }
    },
    [youfundrContract, provider],
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
      await contract.allProjects().then(async (addresses) => {
        const projectDetails = await Promise.all(
          addresses.map(async (address) => {
            const project = new ethers.Contract(
              address,
              projectABI,
              connection
            );
            const [
              fundStarter,
              fundName,
              fundDescription,
              deadline,
              currentState,
              currentAmount,
              goal,
            ] = await project.details();

            return {
              fundStarter,
              fundName,
              fundDescription,
              deadline: new Date(deadline.toNumber()).toLocaleDateString(),
              currentState,
              currentAmount: ethers.utils.formatEther(currentAmount),
              goal: ethers.utils.formatEther(goal),
            };
          })
        );
        setProjects(projectDetails);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function handleEffect() {
      if (youfundrContract && provider) {
        await youfundrContract.allProjects().then(async (addresses) => {
          const projectDetails = await Promise.all(
            addresses.map(async (address) => {
              const project = new ethers.Contract(
                address,
                projectABI,
                provider
              );
              const [
                fundStarter,
                fundName,
                fundDescription,
                deadline,
                currentState,
                currentAmount,
                goal,
              ] = await project.details();

              return {
                fundStarter,
                fundName,
                fundDescription,
                deadline: new Date(deadline.toNumber()).toLocaleDateString(),
                currentState,
                currentAmount: ethers.utils.formatEther(currentAmount),
                goal: ethers.utils.formatEther(goal),
              };
            })
          );
          setProjects(projectDetails);
        });
      }
    }

    handleEffect();
  }, [projects.length]);

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
