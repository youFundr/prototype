import { useState } from "react";
import { Box, Button, CardActions, Collapse } from "@mui/material";
import ProjectDetailsFooterText from "../ProjectDetailsFooterText";
import FundForm from "../FundForm";
import { useAccount } from "wagmi";

export default function ProjectDetailsFooter({
  deadline,
  currentState,
  address,
  projectABI,
  fundStarter,
}) {
  const [expanded, setExpanded] = useState(false);

  const {
    data: { address: userAddress } = {},
    isError,
    isLoading,
  } = useAccount();

  const toggleFundForm = () => setExpanded(!expanded);
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        <CardActions
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
          onClick={toggleFundForm}
        >
          {userAddress && userAddress !== fundStarter && (
            <Button
              sx={{ display: expanded ? "none" : "flex" }}
              variant="contained"
            >
              Fund
            </Button>
          )}
        </CardActions>
        <Box sx={{ padding: 1 }}>
          {deadline && (
            <ProjectDetailsFooterText text={`Deadline: ${deadline}`} />
          )}
          {(currentState || currentState === 0) && (
            <ProjectDetailsFooterText text={`Status: ${currentState}`} />
          )}
        </Box>
      </Box>
      {userAddress && userAddress !== fundStarter && (
        <Collapse in={expanded}>
          <FundForm
            toggleForm={toggleFundForm}
            address={address}
            projectABI={projectABI}
          />
        </Collapse>
      )}
    </Box>
  );
}
