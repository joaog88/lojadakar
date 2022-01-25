import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

export default function ListagemPneus() {
  const buttonStyle = {
    backgroundColor: "#ffb700",
    marginBottom: "15px",
    fontWeight: 550,
  };
  return (
    <div style={{ paddingLeft: "10px" }}>
      <Grid
        alignItems="center"
        style={{
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        <Grid item xs={3}>
          <img src="/Imagens/pneu4.JPG" height="250px" />
          <Typography variant="h6" color="black" style={{ fontWeight: 25 }}>
            LT265/65R18 10 LONAS 122/119R BRUTUS TA
          </Typography>
          <Typography variant="h6" color="black" style={{ fontWeight: 800 }}>
            R$:250,00
          </Typography>
          <Button variant="contained" style={buttonStyle}>
            Ver Detalhes
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
