import { Typography } from "@mui/material";

export default function ProjectDetailsFooterText({ text }) {
  return (
    <Typography
      sx={{
        textAlign: {
          xs: "center",
          sm: "right",
        },
        fontStyle: "italic",
        color: (theme) => theme.palette.info.main,
      }}
    >
      {text}
    </Typography>
  );
}
