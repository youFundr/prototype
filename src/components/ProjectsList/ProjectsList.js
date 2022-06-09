import { Container } from "@mui/system";
import { useContractRead } from "wagmi";
import { youfundrABI, youfundrAddress } from "../../constants";
import ProjectsListItem from "../ProjectsListItem";

export default function ProjectsList() {
  const { data, isError, isLoading } = useContractRead(
    {
      addressOrName: youfundrAddress,
      contractInterface: youfundrABI,
    },
    "allProjects"
  );

  if (!data || !Array.isArray(data) || !data.length) return;

  return (
    <Container
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "25px",
      }}
    >
      {data.map((address) => (
        <ProjectsListItem key={address} address={address} />
      ))}
    </Container>
  );
}
