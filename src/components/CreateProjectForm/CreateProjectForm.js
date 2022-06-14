import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";
import { youfundrAddress, youfundrABI } from "../../constants";
import CreateProjectFormTextField from "../CreateProjectFormTextField";

export default function CreateProjectForm({ youfundrContract }) {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    deadline: "",
    goal: "",
  });
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    deadline: "",
    goal: "",
  });

  const { data, isError, isLoading, write } = useContractWrite(
    {
      addressOrName: youfundrAddress,
      contractInterface: youfundrABI,
    },
    "startFund",
    {
      args: [payload.name, payload.description, payload.deadline, payload.goal],
      onSuccess() {
        navigate("/");
      },
    }
  );

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      setFormInput((prev) => ({ ...prev, [name]: value }));

      if (name === "goal") {
        setPayload((prev) => ({
          ...prev,
          [name]: ethers.utils.parseEther(value),
        }));
      } else {
        setPayload((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      // DateTimePicker sends value as the top level parameter
      setFormInput((prev) => ({ ...prev, deadline: event }));
      if (!Number.isNaN(Date.parse(event) / 1000)) {
        setPayload((prev) => ({ ...prev, deadline: Date.parse(event) / 1000 }));
      }
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      write();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box component="form" onSubmit={handleSubmit}>
        <Card raised>
          <CardHeader
            title="Create New Project"
            subheader="To get up and running, enter the following information about your new project."
          />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <CreateProjectFormTextField
              name="name"
              id="project-name"
              label="Project Name"
              value={formInput.name}
              onChange={handleChange}
              required
            />
            <CreateProjectFormTextField
              name="description"
              id="project-description"
              label="Description"
              value={formInput.description}
              onChange={handleChange}
              required
            />
            <DateTimePicker
              name="deadline"
              label="Funding Deadline"
              renderInput={(params) => (
                <CreateProjectFormTextField {...params} />
              )}
              value={formInput.deadline}
              onChange={handleChange}
              required
            />
            <CreateProjectFormTextField
              name="goal"
              id="project-goal"
              label="Goal Amount"
              value={formInput.goal}
              onChange={handleChange}
              required
            />
          </CardContent>
          <CardActions>
            <Button color="error">Cancel</Button>
            <Button type="submit">Create</Button>
          </CardActions>
        </Card>
      </Box>
    </LocalizationProvider>
  );
}
