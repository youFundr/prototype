import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContractRead } from "wagmi";
import { projectABI } from "../../constants";
import { transformProjectDetails } from "../../utils";

export default function ProjectsListItem({ address }) {
  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: address,
      contractInterface: projectABI,
    },
    "details"
  );

  const {
    projectAddress = "",
    fundName = "",
    fundDescription = "",
    deadline = "",
    currentState = "",
    currentAmount = "",
    goal = "",
  } = transformProjectDetails(data);

  return (
    <Container
      component="li"
      sx={{ marginBottom: (theme) => theme.spacing(4) }}
    >
      <Container
        component={Link}
        to={`/project/${address}`}
        sx={{
          textDecoration: "none",
        }}
      >
        <Card raised>
          <CardHeader title={fundName} subheader={projectAddress} />
          <CardContent>
            <Typography>{goal} ETH</Typography>
            <Typography>{currentAmount} ETH</Typography>
            <Typography>{fundDescription}</Typography>
            <Typography>{deadline}</Typography>
            <Typography>{currentState}</Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
