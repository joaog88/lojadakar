import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavbarInferior from "./NavbarInferior";
import oleopagina from "../assets/imgs/oleopagina.jpg";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AutoPecas() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 10;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 50,
        backgroundColor: "#dedede",
      },
    },
  };
  const EstiloCardInformativo = {
    backgroundColor: "#ffc800",
    borderRadius: "10px",
    marginLeft: "30px",
    height: "300px",
  };
  const EstiloLetraTitulo = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.8rem",
  };
  const EstiloSubTitulo = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.5rem",
  };
  const EstiloLetraTexto = {
    fontFamily: "Helvetica",
    fontWeight: 450,
    color: "black",
    fontSize: "1.2rem",
  };
  const EstiloLetraTelefone = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "0.98rem",
  };
  const ButtonStyle = {
    fontSize: "1.20rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    backgroundColor: "#ffc800",
    padding: "2px",
    paddingRight: "5px",
    paddingLeft: "5px",
    borderRadius: "15px",
  };
  const ButtonStyleTelefone = {
    fontSize: "0.95rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    backgroundColor: "#ffc800",
    borderRadius: "20px",
    marginRight: "5px",
    color: "#000000",
    borderColor: "#000000",
    borderWidth: "2.2px",
  };
  const EstiloLetraCard = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.2rem",
  };
  return (
    <div>
      <div
        style={{
          background: `url(${oleopagina}) no-repeat center`,
          backgroundSize: "cover",
          paddingTop: "415px",
        }}
      >
        <br />
      </div>
      <div
        style={{
          backgroundColor: "#121212",
          paddingBottom: "3px",
        }}
      />

      <Grid
        container
        alignItems="flex-start"
        justify="center"
        style={{ padding: "20px", backgroundColor: "#ededed" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ textAlign: "center" }}
          >
            <Grid item xs={6}>
              <Typography style={EstiloLetraTitulo}>
                Qual óleo você está procurando?
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
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
              <Box
                component="form"
                noValidate
                autoComplete="off"
                style={{ marginRight: "5px" }}
              >
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={2.5}
                  placeholder="Digite Aqui"
                  variant="outlined"
                  color="primary"
                  focused
                  style={{ width: "500px" }}
                  onChange={handleChange}
                  value={value}
                />
              </Box>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                float: "center",
                verticalAlign: "middle",
              }}
            >
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href={
                  "https://api.whatsapp.com/send/?phone=5535997658926&text=" +
                  value
                }
              >
                <Button
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  style={ButtonStyle}
                >
                  Enviar
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <Card
              variant="outlined"
              style={{
                borderRadius: "7px",
                marginLeft: "470px",
                marginRight: "470px",
                backgroundColor: "#ededed",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography style={EstiloLetraCard}>
                  Ou se preferir contate-nos via telefone:
                </Typography>
                <div
                  style={{
                    textAlign: "center",
                    display: "inline-block",
                    float: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography style={EstiloLetraTelefone}>
                    São Lourenço:
                  </Typography>
                  <Button
                    variant="text"
                    startIcon={<CallOutlinedIcon />}
                    style={ButtonStyleTelefone}
                  >
                    (35) 3332-4318
                  </Button>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    display: "inline-block",
                    float: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography style={EstiloLetraTelefone}>Varginha:</Typography>
                  <Button
                    variant="text"
                    startIcon={<CallOutlinedIcon />}
                    style={ButtonStyleTelefone}
                  >
                    (35) 3222-5005
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            paddingBottom: "30px",
            paddingTop: "20px",
          }}
        >
          <Grid item xs={12} style={{ marginBottom: "30px" }}>
            <Typography style={EstiloLetraTitulo}>
              Por que comprar óleo na Dakar?
            </Typography>
            <Grid item xs={8}>
              <div
                style={{
                  backgroundColor: "#690000",
                  paddingBottom: "4px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ marginTop: "10px" }}
          >
            <Grid item xs={3}>
              <Card style={EstiloCardInformativo}>
                <CardContent>
                  <Grid item xs={12} style={{ textAlign: "Center" }}>
                    <Typography style={EstiloSubTitulo}>Produtos</Typography>
                    <Grid item xs={12}>
                      <div
                        style={{
                          backgroundColor: "#690000",
                          paddingBottom: "3px",
                        }}
                      />
                    </Grid>
                  </Grid>{" "}
                  <Grid item xs={11} style={{ paddingTop: "5px" }}>
                    <Typography style={EstiloLetraTexto}>
                      Em nossas filiais, você irá encontrar o óleo que está
                      procurando, com a viscosidade correta para seu veículo,
                      marca adequada e com preço justo.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={EstiloCardInformativo}>
                <CardContent>
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography style={EstiloSubTitulo}>Ferramentas</Typography>
                    <Grid item xs={12}>
                      <div
                        style={{
                          backgroundColor: "#690000",
                          paddingBottom: "3px",
                        }}
                      />
                    </Grid>
                  </Grid>{" "}
                  <Grid item xs={11} style={{ paddingTop: "5px" }}>
                    <Typography style={EstiloLetraTexto}>
                      Nossas lojas são equipadas com ferramentas de ponta, com o
                      objetivo de assegurar o profissionalismo na troca de óleo
                      do seu veículo, com o intuito o funcionamento correto do
                      motor do seu veículo.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={EstiloCardInformativo}>
                <CardContent>
                  <Grid item xs={12} style={{ textAlign: "Center" }}>
                    <Typography style={EstiloSubTitulo}>
                      Profissionais
                    </Typography>
                    <Grid item xs={12}>
                      <div
                        style={{
                          backgroundColor: "#690000",
                          paddingBottom: "3px",
                        }}
                      />
                    </Grid>
                  </Grid>{" "}
                  <Grid item xs={11} style={{ paddingTop: "5px" }}>
                    <Typography style={EstiloLetraTexto}>
                      Contamos com profissionais capacitados e habilodosos em
                      nossa equipe. Buscando executar o serviço com maestria e
                      profissionalismo.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <NavbarInferior />
    </div>
  );
}
