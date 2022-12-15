import { Button, Grid, Typography, Hidden } from "@material-ui/core";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import trocaoleopagina from "../assets/imgs/trocaoleopagina.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function Trocadeoleo() {
  const ButtonStyle = {
    fontSize: "1.25rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    backgroundColor: "#ffc800",
    padding: "5px",
  };
  const ButtonStyleMobile = {
    fontSize: "0.92rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    backgroundColor: "#ffc800",
    padding: "5px",
  };
  const ButtonStyleTelefone = {
    fontSize: "1.25rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    padding: "5px",
  };
  const ButtonStyleTelefoneMobile = {
    fontSize: "0.92rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    padding: "5px",
  };
  const ButtonStyleEndereço = {
    fontSize: "0.92rem",
    fontWeight: 549,
    textTransform: "none",

    fontFamily: "Helvetica",
    variant: "contained",
    padding: "10px",
  };
  const EstiloLetra = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.5rem",
  };
  const EstiloLetraMobile = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.2rem",
  };
  const EstiloLetraCard = {
    fontFamily: "Helvetica",
    fontWeight: 450,
    color: "black",
    fontSize: "1.25rem",
  };
  const EstiloLetraCardMobile = {
    fontFamily: "Helvetica",
    fontWeight: 450,
    color: "black",
    fontSize: "1.0rem",
  };
  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <div
        style={{
          background: `url(${trocaoleopagina}) no-repeat center`,
          backgroundSize: "cover",
          paddingTop: "350px",
          zIndex: "-10",
        }}
      >
        <br />
      </div>
      <div
        style={{
          backgroundColor: "#383838",
          paddingBottom: "3px",
        }}
      />

      <Grid container alignItems="center" justify="center">
        <Grid item xs={6}>
          <Card
            sx={{ minWidth: 275 }}
            style={{
              backgroundColor: "#ededed",
              position: "absolute",
              top: "430px",
              right: "50%",
              transform: "translate(50%, -50%)",
            }}
          >
            <CardContent>
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{ textAlign: "center" }}
              >
                <Hidden xsDown>
                  <Grid item xs={12}>
                    <Typography style={EstiloLetraCard}>
                      Agende seu troca de óleo com um de nossos atendentes via:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href={
                        "https://api.whatsapp.com/send/?phone=5535998644153&text=Olá, gostaria de fazer um orçamento para fazer um troca de óleo."
                      }
                    >
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        fullWidth
                        style={ButtonStyle}
                      >
                        Whatsapp
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <Typography style={EstiloLetraCard}>
                      Se preferir, ligue no número:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ paddingTop: "10px" }}>
                    <Button
                      variant="text"
                      startIcon={<CallOutlinedIcon />}
                      color="primary"
                      style={ButtonStyleTelefone}
                      fullWidth
                    >
                      São Lourenço:(35) 3332-4318
                    </Button>
                  </Grid>
                  <Grid item xs={6} style={{ paddingTop: "10px" }}>
                    <Button
                      variant="text"
                      startIcon={<CallOutlinedIcon />}
                      color="primary"
                      style={ButtonStyleTelefone}
                      fullWidth
                    >
                      Varginha: (35) 3222-5005
                    </Button>
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid item xs={12}>
                    <Typography style={EstiloLetraCardMobile}>
                      Agende seu troca de óleo com um de nossos atendentes via:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href={
                        "https://api.whatsapp.com/send/?phone=5535997658926&text=Olá, gostaria de fazer um orçamento para fazer um troca de óleo."
                      }
                    >
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        fullWidth
                        style={ButtonStyleMobile}
                      >
                        Whatsapp
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <Typography style={EstiloLetraCardMobile}>
                      Se preferir, ligue no número:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <Button
                      variant="text"
                      startIcon={<CallOutlinedIcon />}
                      color="primary"
                      style={ButtonStyleTelefoneMobile}
                      fullWidth
                    >
                      São Lourenço:(35) 3332-4318
                    </Button>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "10px" }}>
                    <Button
                      variant="text"
                      startIcon={<CallOutlinedIcon />}
                      color="primary"
                      style={ButtonStyleTelefoneMobile}
                      fullWidth
                    >
                      Varginha: (35) 3222-5005
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" justify="flex-start">
        <Grid
          item
          xs={12}
          sm={5}
          style={{
            textAlign: "left",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginTop: "150px",
            marginBottom: "30px",
          }}
        >
          <Hidden xsDown>
            <Typography style={EstiloLetra}>
              Ou vá até uma de nossas lojas
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography style={EstiloLetraMobile}>
              Ou vá até uma de nossas lojas
            </Typography>
          </Hidden>
          <div
            style={{
              backgroundColor: "#690000",
              paddingBottom: "3px",
            }}
          />
        </Grid>
        <Grid
          container
          alignItems="flex-start"
          justify="center"
          style={{
            marginBottom: "15px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          <Hidden xsDown>
            <Grid item xs={6}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-22.1228677,-45.0402271/@-22.119906,-45.0735525,13.25z/data=!4m4!4m3!1m1!4e1!1m0"
              >
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 685 }}
                  style={{ backgroundColor: "#d9d9d9" }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      startIcon={<LocationOnOutlinedIcon />}
                      color="primary"
                      paddingBottom="50px"
                      style={ButtonStyleEndereço}
                    >
                      Av. Damião Junqueira de Souza, Número:1120, São Lourenço -
                      MG, 37470-000
                    </Button>
                    <img
                      src="/Imagens/dakarsaolourenco.jpg"
                      height="250px"
                      style={{
                        border: "#690000 1px solid",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </CardContent>
                </Card>
              </a>
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: "30px" }}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-21.57066,-45.43906/@-21.8995963,-46.0147217,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
              >
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 665 }}
                  style={{ backgroundColor: "#d9d9d9" }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      startIcon={<LocationOnOutlinedIcon />}
                      color="primary"
                      paddingBottom="50px"
                      style={ButtonStyleEndereço}
                    >
                      Av. Princesa do Sul, Número: 131 - Jardim Andere, Varginha
                      - MG, 37026-083
                    </Button>
                    <img
                      src="/Imagens/lojavarginha.jpg"
                      height="250px"
                      style={{
                        border: "#690000 1px solid",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </CardContent>
                </Card>
              </a>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-22.1228677,-45.0402271/@-22.119906,-45.0735525,13.25z/data=!4m4!4m3!1m1!4e1!1m0"
              >
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 685 }}
                  style={{ backgroundColor: "#d9d9d9" }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      startIcon={<LocationOnOutlinedIcon />}
                      color="primary"
                      paddingBottom="50px"
                      style={ButtonStyleEndereço}
                    >
                      Av. Damião Junqueira de Souza, Número:1120, São Lourenço -
                      MG, 37470-000
                    </Button>
                    <img
                      src="/Imagens/dakarsaolourenco.jpg"
                      height="200px"
                      style={{
                        border: "#690000 1px solid",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </CardContent>
                </Card>
              </a>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "5px" }}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/dir/-22.1188723,-45.0466521/-21.57066,-45.43906/@-21.8995963,-46.0147217,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
              >
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 665 }}
                  style={{ backgroundColor: "#d9d9d9" }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      startIcon={<LocationOnOutlinedIcon />}
                      color="primary"
                      paddingBottom="50px"
                      style={ButtonStyleEndereço}
                    >
                      Av. Princesa do Sul, Número: 131 - Jardim Andere, Varginha
                      - MG, 37026-083
                    </Button>
                    <img
                      src="/Imagens/lojavarginha.jpg"
                      height="200px"
                      style={{
                        border: "#690000 1px solid",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </CardContent>
                </Card>
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}
