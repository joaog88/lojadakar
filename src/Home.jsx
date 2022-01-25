import React, { useState } from "react";
import Itens from "./components/Itens";
import NavbarInferior from "./components/NavbarInferior";
import { Typography, Button, Grid } from "@material-ui/core";
import Carousel from "./components/Carousel";
import Menulateral from "./components/Menulateral";
import ListagemPneus from "./components/ListagemPneus";
import Serviços from "./components/Serviços";

function Home() {
  const buttonStyle = {
    backgroundColor: "#ffb700",
    marginTop: "10px",
    marginBottom: "15px",
    fontWeight: 550,
  };
  return (
    <div>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid
          item
          xs={12}
          style={{
            maxHeight: "89  vh",
            overflowY: "auto",
            backgroundColor: "#d9d9d9",
          }}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ textAlign: "center" }}
          >
            <Grid item xs={12} stylr={{ textAlign: "center" }}>
              <Carousel />
              <div
                style={{ backgroundColor: "grey", paddingBottom: "1px" }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <Serviços />
            </Grid>
            <Grid item xs={12}>
              <NavbarInferior />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
