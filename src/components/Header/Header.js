import { AppBar, Toolbar, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnect } from "wagmi";
import { Link } from "react-router-dom";
import AddProjectLink from "../AddProjectLink/AddProjectLink";

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
          {activeConnector && <AddProjectLink />}
          <ConnectButton />
        </section>
      </Toolbar>
    </AppBar>
  );
}
