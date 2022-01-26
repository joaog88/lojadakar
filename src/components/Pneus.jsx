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
import imagemdepneus from "../assets/imgs/imagemdepneus.jpg";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Pneus() {
  const [aro, setAro] = React.useState("");

  const escolheraro = (event) => {
    setAro(event.target.value);
  };
  const [largura, setLargura] = React.useState("");

  const escolherlargura = (event) => {
    setLargura(event.target.value);
  };
  const [altura, setAltura] = React.useState("");

  const escolheraltura = (event) => {
    setAltura(event.target.value);
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
    height: "230px",
  };
  const EstiloLetraTitulo = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.6rem",
  };
  const EstiloSubTitulo = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "1.1rem",
  };
  const EstiloLetraTexto = {
    fontFamily: "Helvetica",
    fontWeight: 450,
    color: "black",
    fontSize: "1.0rem",
  };
  const ButtonStyle = {
    fontSize: "1.25rem",
    fontWeight: 540,
    textTransform: "none",
    fontFamily: "Helvetica",
    variant: "contained",
    backgroundColor: "#ffc800",
    borderRadius: "20px",
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
  const EstiloLetraTelefone = {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "black",
    fontSize: "0.98rem",
  };
  return (
    <div>
      <div
        style={{
          background: `url(${imagemdepneus}) no-repeat center`,
          backgroundSize: "100vw 100%",
          paddingTop: "300px",
        }}
      >
        <br />
      </div>

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
                Selecione o pneu que você está procurando
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
              <Box>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="escolheraro">Aro</InputLabel>
                  <Select
                    labelId="aro"
                    id="escolheroaro"
                    value={aro}
                    label="aro"
                    onChange={escolheraro}
                    MenuProps={MenuProps}
                    style={{ borderRadius: "10px" }}
                  >
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                  </Select>
                </FormControl>
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
              <Box>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="largura">Largura</InputLabel>
                  <Select
                    labelId="escolherlargura"
                    id="largura"
                    value={largura}
                    label="Largura"
                    onChange={escolherlargura}
                    MenuProps={MenuProps}
                    style={{ borderRadius: "10px" }}
                  >
                    <MenuItem value={155}>155</MenuItem>
                    <MenuItem value={165}>165</MenuItem>
                    <MenuItem value={175}>175</MenuItem>
                    <MenuItem value={185}>185</MenuItem>
                    <MenuItem value={195}>195</MenuItem>
                    <MenuItem value={205}>205</MenuItem>
                    <MenuItem value={225}>225</MenuItem>
                    <MenuItem value={245}>245</MenuItem>
                    <MenuItem value={255}>255</MenuItem>
                    <MenuItem value={265}>265</MenuItem>
                    <MenuItem value={275}>275</MenuItem>
                    <MenuItem value={285}>285</MenuItem>
                    <MenuItem value={295}>295</MenuItem>
                    <MenuItem value={305}>305</MenuItem>
                    <MenuItem value={315}>315</MenuItem>
                    <MenuItem value={325}>325</MenuItem>
                  </Select>
                </FormControl>
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
              <Box>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="altura">Altura</InputLabel>
                  <Select
                    labelId="escolheraltura"
                    id="altura"
                    value={altura}
                    label="Altura"
                    onChange={escolheraltura}
                    MenuProps={MenuProps}
                    style={{ borderRadius: "10px" }}
                  >
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={55}>55</MenuItem>
                    <MenuItem value={60}>60</MenuItem>
                    <MenuItem value={65}>65</MenuItem>
                    <MenuItem value={70}>70</MenuItem>
                    <MenuItem value={75}>75</MenuItem>
                  </Select>
                </FormControl>
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
                  "https://api.whatsapp.com/send/?phone=5535997658926&text=Olá, procuro um pneu de aro " +
                  aro +
                  ", de largura " +
                  largura +
                  " e altura " +
                  altura +
                  "."
                }
              >
                <Button
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  style={ButtonStyle}
                >
                  Consulte-nos
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <Card
              variant="outlined"
              style={{
                borderRadius: "7px",
                backgroundColor: "#ededed",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography style={EstiloLetraCard}>
                  Caso não encontre a medida que deseja, contate-nos via
                  telefone:
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
              Por que comprar pneu na Dakar?
            </Typography>
            <Grid item xs={8}>
              <div
                style={{
                  backgroundColor: "#690000",
                  paddingBottom: "3px",
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
            <Grid item xs={4}>
              <Card style={EstiloCardInformativo}>
                <CardContent>
                  <Grid item xs={12} style={{ textAlign: "center" }}>
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
                      Em nossas filiais, você irá encontrar diversas marcas
                      renomadas de pneus do mercado, como por exemplo a
                      Continental, com preço justo e material de qualidade.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
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
                      objetivo de assegurar o profissionalismo da instalação dos
                      pneus em seu veículo, com o intuito de garantir a sua
                      segurança e da sua família.
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
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
      <div
        style={{
          backgroundColor: "#ededed",
          paddingBottom: "5px",
        }}
      />
      <NavbarInferior />
    </div>
  );
}
