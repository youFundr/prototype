import { useContractRead } from "wagmi";
import { useParams } from "react-router-dom";
import { projectABI } from "../../constants";
import { transformProjectDetails } from "../../utils";
import { Card } from "@mui/material";
import ProjectDetailsHeader from "../ProjectDetailsHeader";
import ProjectDetailsContent from "../ProjectDetailsContent";
import ProjectDetailsFooter from "../ProjectDetailsFooter";

export default function ProjectDetails() {
  const { address } = useParams();
  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: address,
      contractInterface: projectABI,
    },
    "details",
    {
      watch: true,
    }
  );

  const {
    projectAddress = "",
    fundName = "",
    fundDescription = "",
    fundStarter = "",
    deadline = "",
    currentState = "",
    currentAmount = "",
    goal = "",
  } = transformProjectDetails(data);

  return (
    <Card>
      <ProjectDetailsHeader
        title={fundName}
        subheader={`Started By: ${fundStarter}`}
        subheaderTypographyProps={{ sx: { wordBreak: "break-all" } }}
      />
      <ProjectDetailsContent
        {...{ projectAddress, goal, currentAmount, fundDescription }}
      />
      <ProjectDetailsFooter
        {...{ deadline, currentState, address, projectABI }}
      />
    </Card>
  );
}
