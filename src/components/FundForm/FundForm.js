import { useState } from "react";
import { Box } from "@mui/system";
import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CollapsableAlert from "../CollapsableAlert";

export default function FundForm({ toggleForm, address, projectABI }) {
  const [formInput, setFormInput] = useState({
    amount: "",
  });
  const [payload, setPayload] = useState({
    amount: "",
  });
  const [validated, setValidated] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [error, setError] = useState(null);
  const errorText = "Something went wrong, please try again later.";

  const { data, isError, isLoading, write } = useContractWrite(
    {
      addressOrName: address,
      contractInterface: projectABI,
    },
    "sendFunds",
    {
      overrides: {
        value: payload.amount,
      },
      onSuccess() {
        navigate("/");
      },
      onError(error) {
        setError(true);
        setAlertOpen(true);
      },
    }
  );

  const navigate = useNavigate();

  const parseEth = (amount) => {
    try {
      const parsedAmount = ethers.utils.parseEther(amount);
      return parsedAmount;
    } catch (err) {
      setValidated(false);
      setHelperText("Invalid amount value.  Please enter value in ETH");
    }
  };

  const handleChange = (event) => {
    if (
      event?.target &&
      typeof event.target?.value === "string" &&
      event.target?.name
    ) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      const parsedAmount = parseEth(value);
      if (parsedAmount) {
        setError(false);
        setAlertOpen(false);
        setValidated(true);
        setHelperText("");
        setPayload((prev) => ({ ...prev, amount: parsedAmount }));
        setFormInput((prev) => ({ ...prev, [name]: value }));
      } else if (value === "") {
        setError(false);
        setAlertOpen(false);
        setValidated(true);
        setHelperText("");
        setPayload({ amount: "" });
        setFormInput({ amount: "" });
      }
    }
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      write();
    } catch (err) {
      setError(true);
      setAlertOpen(true);
    }
  };

  const handleAlertClose = () => setAlertOpen(false);

  return (
    <Box
      component="form"
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">
        How much would you like to contribute?
      </Typography>
      <TextField
        name="amount"
        id="amount"
        label="Amount (ETH)"
        value={formInput.amount}
        variant="standard"
        onChange={handleChange}
        required
        error={!validated}
        helperText={helperText}
      />
      <Box
        sx={{
          marginTop: 2,
          display: { xs: "flex", sm: "initial" },
          flexDirection: { xs: "column", sm: "unset" },
        }}
      >
        <Button variant="contained" onClick={toggleForm}>
          Cancel
        </Button>
        <Button
          disabled={error || !formInput.amount}
          color="warning"
          variant="contained"
          type="submit"
        >
          Confirm
        </Button>
      </Box>
      <CollapsableAlert
        severity="error"
        open={alertOpen}
        handleClose={handleAlertClose}
        text={errorText}
      />
      <Collapse in={alertOpen}>
        <Alert
          severity="error"
          sx={{ marginTop: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setAlertOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          {errorText}
        </Alert>
      </Collapse>
    </Box>
  );
}
