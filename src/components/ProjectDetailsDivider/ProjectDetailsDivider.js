import { Divider } from "@mui/material";

export default function ProjectDetailsDivder({ children }) {
  return (
    <Divider
      variant="left"
      textAlign="left"
      sx={{
        fontWeight: "bold",
        marginTop: (theme) => theme.spacing(2),
        marginBottom: (theme) => theme.spacing(1),
      }}
    >
      {children}
    </Divider>
  );
}
