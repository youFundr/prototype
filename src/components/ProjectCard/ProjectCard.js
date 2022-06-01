import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function ProjectCard({
  fundName = "",
  fundStarter = "",
  goal = 0,
  currentAmount = 0,
  fundDescription = "",
  deadline = "",
  currentState = 0,
}) {
  return (
    <Card
      sx={{
        maxWidth: "345px",
        width: "345px",
        marginBottom: "25px",
      }}
    >
      <CardHeader title={fundName} subheader={fundStarter} />
      <CardContent>
        <Typography>{goal} ETH</Typography>
        <Typography>{currentAmount} ETH</Typography>
        <Typography>{fundDescription}</Typography>
        <Typography>{deadline}</Typography>
        <Typography>{currentState}</Typography>
      </CardContent>
    </Card>
  );
}
