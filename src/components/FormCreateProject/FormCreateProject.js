import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, createTheme } from "@mui/system";
import { ethers } from "ethers";

export default function FormCreateProject({ youfundrContract }) {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    deadline: "",
    goal: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      setFormInput((prev) => ({ ...prev, [name]: value }));
    } else {
      // DateTimePicker sends value as the top level parameter
      setFormInput((prev) => ({ ...prev, deadline: event }));
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { name, description, deadline, goal } = formInput;

      const parsedDeadline = Date.parse(deadline) / 1000;
      if (Number.isNaN(parsedDeadline))
        throw Error("Deadline expected to be of type Date.");

      if (!name || !description)
        throw Error("Project Name and Description must be provided.");

      const parsedGoal = ethers.utils.parseEther(goal);
      await youfundrContract.startFund(
        name,
        description,
        parsedDeadline,
        parsedGoal
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const theme = createTheme();
  const styles = {
    createProjectForm: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
    },
    createProjectForm__content: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
    },
    createProjectForm__input: {
      marginBottom: theme.spacing(2),
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box
          component="form"
          style={styles.createProjectForm}
          onSubmit={handleSubmit}
        >
          <Card>
            <CardHeader
              title="Create New Project"
              subheader="To get up and running, enter the following information about your new project."
            />
            <CardContent style={styles.createProjectForm__content}>
              <TextField
                name="name"
                id="project-name"
                label="Project Name"
                value={formInput.name}
                onChange={handleChange}
                style={styles.createProjectForm__input}
                required
              />
              <TextField
                name="description"
                id="project-description"
                label="Description"
                value={formInput.description}
                onChange={handleChange}
                style={styles.createProjectForm__input}
                required
              />
              <DateTimePicker
                name="deadline"
                label="Funding Deadline"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={styles.createProjectForm__input}
                  />
                )}
                value={formInput.deadline}
                onChange={handleChange}
                required
              />
              <TextField
                name="goal"
                id="project-goal"
                label="Goal Amount"
                value={formInput.goal}
                onChange={handleChange}
                style={styles.createProjectForm__input}
                required
              />
            </CardContent>
            <CardActions>
              <Button color="error">Cancel</Button>
              <Button type="submit">Create</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
