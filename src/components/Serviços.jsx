import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import alinhamento from "../assets/imgs/alinhamento.jpg";
import balanceamento from "../assets/imgs/balanceamento.jpg";
import trocadeoleo from "../assets/imgs/trocadeoleo.jpg";
import motor from "../assets/imgs/motor.jpg";
import suspensão from "../assets/imgs/suspensão.jpg";
import escapamento from "../assets/imgs/escapamento.jpg";
import { useNavigate } from "react-router-dom";

export default function Serviços() {
  const navigate = useNavigate();
  const AgendeSeuAlinhamento = () => {
    navigate("/alinhamento");
  };
  const navigate1 = useNavigate();
  const AgendeSeuBalanceamento = () => {
    navigate1("/balanceamento");
  };
  const navigate2 = useNavigate();
  const AgendeSuaTrocadeoleo = () => {
    navigate2("/trocadeoleo");
  };
  const navigate3 = useNavigate();
  const Suspensao = () => {
    navigate3("/suspensao");
  };
  const navigate4 = useNavigate();
  const Motor = () => {
    navigate4("/motor");
  };
  const navigate5 = useNavigate();
  const Escapamento = () => {
    navigate5("/escapamento");
  };
  const buttonStyle = {
    backgroundColor: "#ffb700",
    marginBottom: "15px",
    fontWeight: 550,
  };
  const EstiloLetra = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.3rem",
  };
  const EstiloCard = {
    paddingTop: "20px",
    paddingBottom: "20px",
  };
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ textAlign: "left", padding: "15px", margin: "0px" }}
      >
        <Grid item xs={12} style={{ marginTop: "5px" }}>
          <Grid container alignItems="flex-start" justify="flex-start">
            <Grid item xs={4}>
              <Typography variant="h4" style={EstiloLetra}>
                AGENDE SEU SERVIÇO
              </Typography>
              <div
                style={{
                  backgroundColor: "#690000",
                  paddingBottom: "3px",
                  marginBottom: "20px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={AgendeSeuAlinhamento}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${alinhamento}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                margin: "5px",
                cursor: "pointer",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={AgendeSeuBalanceamento}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${balanceamento}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={AgendeSuaTrocadeoleo}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${trocadeoleo}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={Suspensao}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${suspensão}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={Motor}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${motor}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <div onClick={Escapamento}>
            <Card
              style={{
                ...EstiloCard,
                background: `url(${escapamento}) repeat-x center`,
                backgroundSize: "cover",
                paddingBottom: "120px",
                paddingLeft: "20px",
                cursor: "pointer",
                margin: "5px",
              }}
            >
              <br />
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
