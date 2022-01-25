import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Menu from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuNavbar from "./MenuNavbar";

export default function Navbar({ titulo, abrirMenu, menuOpened }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ButtonStyle = {
    fontFamily: "Helvetica",
    fontWeight: 550,
    color: "#ededed",
    fontSize: "0.95rem",
    textTransform: "uppercase",
    display: "inline-block",
    paddingLeft: "10px",
    paddingRight: "10px",
    verticalAlign: "middle",
    cursor: "pointer",
  };
  const navigate = useNavigate();
  const Pneus = () => {
    navigate("/pneus");
  };
  const Oleos = () => {
    navigate("/oleos");
  };
  const AutoPecas = () => {
    navigate("/autopecas");
  };
  const Acessorios = () => {
    navigate("/acessorios");
  };

  const voltarParaAHomeDoJao = () => {
    navigate("/");
  };
  /*
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
     /*
      <Typography onClick={handleClick} style={ButtonStyle}>
            
                <MenuNavbar
                  open={open}
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                /> /*} em baixo de typography em pneu
*/

  return (
    <div>
      <div style={{ backgroundColor: "#2b2b2b" }}>
        <Grid container alignItems="center" justify="flex-start">
          <Grid item xs={3} style={{ textAlign: "left", paddingLeft: "20px" }}>
            <Grid container alignItems="center" justify="flex-start">
              <img
                src="/Imagens/dakar.jpg"
                height="67px"
                onClick={voltarParaAHomeDoJao}
                style={{
                  cursor: "pointer",
                  paddingBottom: "8px",
                  paddingTop: "8px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ textAlign: "center", verticalAlign: "middle" }}
          >
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                float: "center",
                verticalAlign: "middle",
              }}
            >
              <Typography onClick={Pneus} style={ButtonStyle}>
                Pneus
              </Typography>

              <div
                style={{
                  display: "inline-block",
                  background: "white",
                  paddingTop: "15px",
                  paddingRight: "1px",
                  verticalAlign: "middle",
                }}
              />
              <Typography onClick={Oleos} style={ButtonStyle}>
                Óleos
              </Typography>
              <div
                style={{
                  display: "inline-block",
                  background: "white",
                  paddingTop: "15px",
                  verticalAlign: "middle",
                  paddingRight: "1px",
                }}
              />
              <Typography onClick={AutoPecas} style={ButtonStyle}>
                Auto Peças
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              alignItems="center"
              justify="flex-end"
              style={{ textAlign: "right", paddingRight: "15px" }}
            >
              <img
                src="/Imagens/continentallogo.jpg"
                height="40px"
                onClick={voltarParaAHomeDoJao}
                style={{ cursor: "pointer", paddingRight: "5px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
