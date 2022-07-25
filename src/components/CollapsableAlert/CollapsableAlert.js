import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CollapsableAlert({
  severity,
  open,
  handleClose,
  text,
}) {
  const levels = ["error", "warning", "info", "success"];
  if (!levels.includes(severity)) return;

  const alertTitle = severity.slice(0, 1).toUpperCase() + severity.slice(1);

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        sx={{ marginTop: 2 }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>{alertTitle}</AlertTitle>
        {text}
      </Alert>
    </Collapse>
  );
}
