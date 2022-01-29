import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Divider } from "@material-ui/core";

export default function MenuNavbar({ setAnchorEl, open, anchorEl }) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const Pneus = () => {
    navigate("/pneus");
    setAnchorEl(null);
  };
  const Oleos = () => {
    navigate("/oleos");
    setAnchorEl(null);
  };
  const AutoPecas = () => {
    navigate("/autopecas");
    setAnchorEl(null);
  };
  const LetraMenu = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "0.95rem",
    textTransform: "uppercase",
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={Pneus} style={LetraMenu}>
          Pneus
        </MenuItem>
        <Divider />
        <MenuItem onClick={Oleos} style={LetraMenu}>
          Óleos
        </MenuItem>
        <Divider />
        <MenuItem onClick={AutoPecas} style={LetraMenu}>
          Auto Peças
        </MenuItem>
      </Menu>
    </div>
  );
}
