import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function Itens() {
  const buttonStyle = {
    backgroundColor: "#ffb700",
    marginTop: "10px",
    marginBottom: "15px",
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justify="flex-start"
        style={{
          textAlign: "center",
          paddingTop: "15px",
          backgroundColor: "gray",
        }}
      >
        <Grid item xs={3}>
          <img src="/Imagens/pneu.JPG" height="250px" />
          <Typography variant="h6" color="black" style={{ fontWeight: 25 }}>
            LT265/65R18 10 LONAS 122/119R BRUTUS TA
          </Typography>
          <Typography variant="h6" color="black" style={{ fontWeight: 800 }}>
            R$:250,00
          </Typography>
          <Link to="/pneu1">
            <Button variant="contained" style={buttonStyle}>
              Ver Detalhes
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Itens;
