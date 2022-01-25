import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import NavbarInferior from "./components/NavbarInferior";

function Pneu1() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justify="flex-start"
        style={{
          textAlign: "center",
          paddingTop: "5px",
          backgroundColor: "#ffb005",
        }}
      >
        <Grid item xs={4} style={{ textAlign: "left", paddingLeft: "10px" }}>
          dsadsadsadsadasdsa
        </Grid>
      </Grid>
      <NavbarInferior />

    </div>
  );
}

export default Pneu1;
