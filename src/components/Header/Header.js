import { AppBar, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ButtonContainer from "../ButtonContainer";
import { Link } from "react-router-dom";

export default function Header({ provider, handleConnect }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Typography variant="h6" component="h2">
            YouFundR
          </Typography>
        </Link>
        <section style={{ display: "flex", flexWrap: "nowrap" }}>
          {provider && (
            <Link to="/create-project">
              <ButtonContainer
                startIcon={
                  <AddIcon sx={{ color: "white", lineHeight: "initial" }} />
                }
                text="Project"
                sx={{ color: "white", lineHeight: "initial" }}
              ></ButtonContainer>
            </Link>
          )}
          {!provider && (
            <ButtonContainer
              text="Connect"
              sx={{ color: "white", display: "flex" }}
              handleClick={handleConnect}
            />
          )}
        </section>
      </Toolbar>
    </AppBar>
  );
}
