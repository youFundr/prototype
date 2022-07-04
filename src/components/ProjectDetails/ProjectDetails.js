import { useContractRead } from "wagmi";
import { useParams } from "react-router-dom";
import { projectABI } from "../../constants";
import { transformProjectDetails } from "../../utils";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import ProjectDetailsDivider from "../ProjectDetailsDivider";
import ProjectDetailsHeader from "../ProjectDetailsHeader";
import ProjectDetailsContent from "../ProjectDetailsContent";

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
      {deadline && (
        <Typography
          sx={{
            textAlign: "right",
            fontStyle: "italic",
            color: (theme) => theme.palette.info.main,
          }}
        >
          Deadline: {deadline}
        </Typography>
      )}
      {(currentState || currentState === 0) && (
        <Typography
          sx={{
            textAlign: "right",
            fontStyle: "italic",
            color: (theme) => theme.palette.info.main,
          }}
        >
          Status: {currentState}
        </Typography>
      )}
    </Card>
  );
}
