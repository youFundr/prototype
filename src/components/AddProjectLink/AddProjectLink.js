import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ButtonContainer from "../ButtonContainer";

export default function AddProjectLink({ color = "white" } = {}) {
  return (
    <Link to="/create-project" style={{ display: "flex" }}>
      <ButtonContainer
        startIcon={<AddIcon sx={{ color, lineHeight: "initial" }} />}
        text="Project"
        sx={{ color, lineHeight: "initial" }}
      ></ButtonContainer>
    </Link>
  );
}
