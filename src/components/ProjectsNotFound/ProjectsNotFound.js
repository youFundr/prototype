import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import AddProjectLink from "../AddProjectLink/AddProjectLink";

export default function ProjectsNotFound() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h1">
        No projects to fund.
      </Typography>
      <Typography variant="h4" component="h3">
        Add your project here.
      </Typography>
      <AddProjectLink color={(theme) => theme.palette.primary} />
    </Container>
  );
}
