import { TextField } from "@mui/material";

export default function CreateProjectFormTextField({ ...props }) {
  return (
    <TextField {...props} sx={{ marginBottom: (theme) => theme.spacing(2) }} />
  );
}
