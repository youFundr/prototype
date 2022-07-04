import { CardContent, LinearProgress, Typography } from "@mui/material";
import ProjectDetailsDivider from "../ProjectDetailsDivider";

export default function ProjectDetailsContent({
  projectAddress,
  goal,
  currentAmount,
  fundDescription,
} = {}) {
  return (
    <CardContent>
      {projectAddress && (
        <>
          <ProjectDetailsDivider>Project Address</ProjectDetailsDivider>
          <Typography sx={{ wordBreak: "break-all" }}>
            {projectAddress}
          </Typography>
        </>
      )}
      {goal && currentAmount && (
        <>
          <ProjectDetailsDivider>Campaign</ProjectDetailsDivider>
          <Typography>
            Raised {currentAmount} of {goal} ETH
          </Typography>
          <LinearProgress
            variant="determinate"
            value={
              Number(currentAmount)
                ? (goal / currentAmount) * 100
                : Number(currentAmount)
            }
          />
        </>
      )}
      {fundDescription && (
        <>
          <ProjectDetailsDivider>Description</ProjectDetailsDivider>
          <Typography>{fundDescription}</Typography>
        </>
      )}
    </CardContent>
  );
}
