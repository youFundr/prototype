import { Container } from "@mui/system";
import Header from "../../components/Header";

export default function standard({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container
          maxWidth="lg"
          sx={{ marginTop: (theme) => theme.spacing(3) }}
        >
          {children}
        </Container>
      </main>
    </>
  );
}
