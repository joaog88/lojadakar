import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import backgroundamarelo from "../assets/imgs/backgroundamarelo.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function NavbarInferior() {
  return (
    <div
      style={{
        background: `url(${backgroundamarelo}) no-repeat center`,
        backgroundSize: "100vw 100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffbf00",
          paddingBottom: "3px",
        }}
      />
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        style={{
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        <Grid item xs={2} style={{ textAlign: "right" }}>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item xs={12}>
              <img
                src="/Imagens/dakarlogoslc.png"
                height="90px"
                style={{
                  cursor: "pointer",
                  paddingBottom: "30px,",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src="/Imagens/dakarvarginha.png"
                height="100px"
                style={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} style={{ textAlign: "center" }}>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-22.1228677,-45.0402271/@-22.119906,-45.0735525,13.25z/data=!4m4!4m3!1m1!4e1!1m0"
          >
            <Button
              variant="text"
              startIcon={<LocationOnOutlinedIcon />}
              color="secondary"
              paddingBottom="50px"
              style={{
                fontSize: "0.70rem",
                fontWeight: 450,
                fontFamily: "Helvetica",
                textTransform: "none",
              }}
            >
              Av. Damião Junqueira de Souza, Número:1120, São Lourenço - MG,
              37470-000
            </Button>
          </a>
          <div>
            <br />
            <br />
          </div>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-21.57066,-45.43906/@-21.8995963,-46.0147217,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
          >
            <Button
              variant="text"
              startIcon={<LocationOnOutlinedIcon />}
              color="secondary"
              paddingBottom="50px"
              style={{
                fontSize: "0.70rem",
                fontWeight: 450,
                fontFamily: "Helvetica",
                textTransform: "none",
              }}
            >
              Av. Princesa do Sul, Número: 131 - Jardim Andere, Varginha - MG,
              37026-083
            </Button>
          </a>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            textAlign: "left",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Card
            variant="outlined"
            sx={{ maxWidth: 200 }}
            style={{
              backgroundColor: "#000000",
              borderWidth: "1px",
              borderColor: "#ffbf00",
            }}
          >
            <CardContent style={{ textAlign: "Left" }}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                  <Typography
                    textAlign="center"
                    style={{
                      fontFamily: "Helvetica",
                      fontWeight: 450,
                      fontSize: "0.80rem",
                      color: "#ebebeb",
                    }}
                  >
                    Fale Conosco:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="text"
                    startIcon={<CallOutlinedIcon />}
                    color="secondary"
                    style={{
                      fontSize: "0.70rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  >
                    São Lourenço: (35) 3332-4318
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="text"
                    startIcon={<CallOutlinedIcon />}
                    color="secondary"
                    style={{
                      fontSize: "0.70rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  >
                    Varginha: (35) 3222-5005
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="text"
                    startIcon={<EmailIcon />}
                    color="secondary"
                    style={{
                      fontSize: "0.70rem",
                      fontWeight: 545,
                      fontFamily: "Helvetica",
                      textTransform: "none",
                    }}
                  >
                    dakar.centroautomotivo@hotmail.com
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={
                      "https://api.whatsapp.com/send/?phone=5535997658926&text=Olá, estou entrando em contato através do site da Dakar."
                    }
                  >
                    <Button
                      variant="text"
                      startIcon={<WhatsAppIcon />}
                      color="secondary"
                      style={{
                        fontSize: "0.70rem",
                        fontWeight: 545,
                        fontFamily: "Helvetica",
                        textTransform: "none",
                      }}
                    >
                      Whatsapp
                    </Button>
                  </a>
                </Grid>
                <Grid item xs={4}>
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
                        fontSize: "0.70rem",
                        fontWeight: 545,
                        fontFamily: "Helvetica",
                        textTransform: "none",
                      }}
                    >
                      Facebook
                    </Button>
                  </a>
                </Grid>
                <Grid item xs={4}>
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
                        fontSize: "0.70rem",
                        fontWeight: 545,
                        fontFamily: "Helvetica",
                        textTransform: "none",
                      }}
                    >
                      Instagram
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavbarInferior;
