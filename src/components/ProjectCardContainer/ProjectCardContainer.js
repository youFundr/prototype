import { Container } from "@mui/system";
import ProjectCard from "../ProjectCard";

export default function ProjectCardContainer({ projects }) {
  if (!projects || !Array.isArray(projects) || !projects.length) return;

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "25px",
      }}
    >
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </Container>
  );
}
