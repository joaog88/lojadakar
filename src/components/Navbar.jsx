import { Button, Grid, Typography, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuNavbar from "./MenuNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Navbar({ titulo, abrirMenu, menuOpened }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const ButtonStyle = {
    fontFamily: "Helvetica",
    fontWeight: 550,
    color: "#EEEEEE",
    fontSize: "0.95rem",
    textTransform: "uppercase",
    display: "inline-block",
    paddingLeft: "10px",
    paddingRight: "10px",
    verticalAlign: "middle",
    cursor: "pointer",
  };
  const ButtonStyleMobile = {
    fontFamily: "Helvetica",
    fontWeight: 650,
    color: "#050505",
    fontSize: "0.98rem",
    display: "inline-block",
    paddingLeft: "20px",
    paddingRight: "20px",
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

  const voltarParaAHomeDoJao = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ backgroundColor: "#2b2b2b" }}>
        <Grid container alignItems="center" justify="flex-start">
          <Hidden xsDown>
            <Grid
              item
              xs={3}
              style={{ textAlign: "left", paddingLeft: "20px" }}
            >
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
          </Hidden>
          <Hidden smUp>
            <Grid
              item
              xs={12}
              style={{
                textAlign: "left",
                paddingLeft: "15px"}}
            >
              <Grid container alignItems="center">
                <Grid item xs={4}    style={{
                textAlign: "left",
              }}>
                <img
                  src="/Imagens/dakar.jpg"
                  height="55px"
                  onClick={voltarParaAHomeDoJao}
                  style={{
                    cursor: "pointer",
                    paddingTop: "8px",
                  }}
                />
                </Grid>
              <Grid item xs={8} style={{textAlign: "center"}}>
              <Grid container alignItems="center" justify="center">
              <Grid item xs={3}>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href={
                    "https://api.whatsapp.com/send/?phone=5535998644153&text=Olá, estou entrando em contato através do site da Dakar."
                  }
                >
                  <Button
                    variant="text"
                    startIcon={<WhatsAppIcon />}
                    color="secondary"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  ></Button>
                </a>
                </Grid>
                <Grid item xs={3}>
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://www.facebook.com/dakarsl"
                >
                  <Button
                    variant="text"
                    startIcon={<FacebookIcon />}
                    color="secondary"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  ></Button>
                </a>
                </Grid>
                <Grid item xs={3}>
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://www.instagram.com/dakar.centroautomotivo/"
                >
                  <Button
                    variant="text"
                    startIcon={<InstagramIcon />}
                    color="secondary"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  ></Button>
                </a>
              </Grid>
              </Grid>
              </Grid>
              </Grid>

            </Grid>
          </Hidden>
          <Hidden xsDown>
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
            
          </Hidden>
          <Hidden smUp>
          <Grid item xs={12}>
                <div
                  style={{
                    backgroundColor: "#ffbf00",
                    paddingBottom: "2px",
                  }}
                />
              </Grid>
          <Grid
              item
              xs={12}
              style={{ textAlign: "center", verticalAlign: "middle", backgroundColor: "#d9d9d9", paddingTop:"3px", 
              paddingBottom:"3px" }}
            >
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  float: "center",
                  verticalAlign: "middle",
                }}
              >
                <Typography onClick={Pneus} style={ButtonStyleMobile}>
                  Pneus
                </Typography>

                <div
                  style={{
                    display: "inline-block",
                    background: "black",
                    paddingTop: "15px",
                    paddingRight: "1px",
                    verticalAlign: "middle",
                  }}
                />
                <Typography onClick={Oleos} style={ButtonStyleMobile}>
                  Óleos
                </Typography>
                <div
                  style={{
                    display: "inline-block",
                    background: "black",
                    paddingTop: "15px",
                    verticalAlign: "middle",
                    paddingRight: "1px",
                  }}
                />
                <Typography onClick={AutoPecas} style={ButtonStyleMobile}>
                  Auto Peças
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
                <div
                  style={{
                    backgroundColor: "#690000",
                    paddingBottom: "2px",
                  }}
                />
              </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid item xs={3}>
              <Grid
                container
                alignItems="center"
                justify="flex-end"
                style={{ textAlign: "right", paddingRight: "15px" }}
              >
                <img
                  src="/Imagens/continentallogo.jpg"
                  height="50px"
                  onClick={voltarParaAHomeDoJao}
                  style={{ cursor: "pointer", paddingRight: "5px" }}
                />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
