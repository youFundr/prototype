import { AppBar, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnect } from "wagmi";
import ButtonContainer from "../ButtonContainer";
import { Link } from "react-router-dom";

export default function Header() {
  const { activeConnector } = useConnect();
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Typography variant="h6" component="h2">
            YouFundR
          </Typography>
        </Link>
        <section style={{ display: "flex", flexWrap: "nowrap" }}>
          {activeConnector && (
            <Link to="/create-project" style={{ display: "flex" }}>
              <ButtonContainer
                startIcon={
                  <AddIcon sx={{ color: "white", lineHeight: "initial" }} />
                }
                text="Project"
                sx={{ color: "white", lineHeight: "initial" }}
              ></ButtonContainer>
            </Link>
          )}
          <ConnectButton />
        </section>
      </Toolbar>
    </AppBar>
  );
}
