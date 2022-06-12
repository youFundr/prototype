import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContractRead } from "wagmi";
import { ethers } from "ethers";
import { projectABI } from "../../constants";

const transformProjectDetails = ({
  deadline = "",
  currentAmount = "0",
  goal = "0",
  ...rest
} = {}) => ({
  deadline: deadline && new Date(deadline.toNumber()).toLocaleDateString(),
  currentAmount: ethers.utils.formatEther(currentAmount),
  goal: ethers.utils.formatEther(goal),
  ...rest,
});

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
      sx={{
        maxWidth: "345px",
        width: "345px",
        marginBottom: "25px",
      }}
    >
      <Container
        component={Link}
        to={`/project/${address}`}
        sx={{ textDecoration: "none" }}
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
