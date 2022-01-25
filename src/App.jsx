import "./App.css";
import React, { useState } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  Grid,
  Hidden,
} from "@material-ui/core";
import Home from "./Home";
import { createTheme } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Erro404 from "./Erro404";
import Navbar from "./components/Navbar";
import Alinhamento from "./components/Alinhamento";
import Balanceamento from "./components/Balanceamento";
import Trocadeoleo from "./components/Trocadeoleo.jsx";
import Suspensao from "./components/Suspensao.jsx";
import Motor from "./components/Motor.jsx";
import Escapamento from "./components/Escapamento.jsx";
import Pneus from "./components/Pneus.jsx";
import Oleos from "./components/Oleos.jsx";
import AutoPecas from "./components/AutoPecas.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  const abrirMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Hidden smUp>
          <Routes>
            <Route
              path="/"
              element={<div>Mobile em construção. Acesse via computador.</div>}
            />
          </Routes>
        </Hidden>
        <Hidden xsDown>
          <Navbar abrirMenu={abrirMenu} menuOpened={menuOpened} />
          <Routes>
            <Route path="/" element={<Home menuOpened={menuOpened} />} />
            <Route
              path="/alinhamento"
              element={<Alinhamento menuOpened={menuOpened} />}
            />
            <Route
              path="/balanceamento"
              element={<Balanceamento menuOpened={menuOpened} />}
            />
            <Route
              path="/trocadeoleo"
              element={<Trocadeoleo menuOpened={menuOpened} />}
            />
            <Route
              path="/suspensao"
              element={<Suspensao menuOpened={menuOpened} />}
            />
            <Route path="/motor" element={<Motor menuOpened={menuOpened} />} />
            <Route
              path="/escapamento"
              element={<Escapamento menuOpened={menuOpened} />}
            />
            <Route path="/pneus" element={<Pneus menuOpened={menuOpened} />} />
            <Route path="/oleos" element={<Oleos menuOpened={menuOpened} />} />
            <Route
              path="/autopecas"
              element={<AutoPecas menuOpened={menuOpened} />}
            />
            <Route path="*" element={<Erro404 menuOpened={menuOpened} />} />
          </Routes>
        </Hidden>
      </Router>
    </ThemeProvider>
  );
}

export default App;
