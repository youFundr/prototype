import { Container } from "@mui/system";
import Header from "../../components/Header";

export default function standard({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="xs">{children}</Container>
      </main>
    </>
  );
}
