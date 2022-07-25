import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useContractRead } from "wagmi";
import { youfundrABI, youfundrAddress } from "../../constants";
import ProjectsListItem from "../ProjectsListItem";
import ProjectsNotFound from "../ProjectsNotFound";

export default function ProjectsList() {
  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: youfundrAddress,
      contractInterface: youfundrABI,
    },
    "allProjects",
    {
      watch: true,
    }
  );

  return (
    <Container
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {isLoading && <CircularProgress />}
      {/* TODO: add error handling  */}
      {!data || !Array.isArray(data) || !data.length ? (
        <ProjectsNotFound />
      ) : (
        data.map((address) => (
          <ProjectsListItem key={address} address={address} />
        ))
      )}
    </Container>
  );
}
