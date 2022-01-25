import React, { useState } from "react";
import { Typography, Button, Grid, Collapse } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Menulateral() {
  const buttonStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 550,
    textTransform: "none",
    fontFamily: "Biome",
  };
  const CollapseStyle = {
    backgroundColor: "#dbdbdb",
  };
  const [subMenuOpened, setSubMenuOpened] = useState(-1000);
  return (
    <div
      style={{
        maxHeight: "87.8vh",
        overflowY: "auto",
        backgroundColor: "#dedede",
      }}
    >
      <Typography
        variant="h6"
        style={{
          fontFamily: "Biome",
          fontWeight: 450,
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#690000",
          color: "#ebebeb",
        }}
      >
        Marcas de Pneus
      </Typography>
      <Divider />
      <Button
        color="primary"
        variant="text"
        fullWidth
        style={buttonStyle}
        onClick={() =>
          subMenuOpened == 1 ? setSubMenuOpened(-1) : setSubMenuOpened(1)
        }
      >
        Continental{" "}
        {subMenuOpened == 1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Collapse in={subMenuOpened == 1} style={CollapseStyle}>
        <Button color="primary" variant="text" fullWidth style={buttonStyle}>
          CrossContact ATR
        </Button>
        <Divider />
        <Button color="primary" variant="text" fullWidth style={buttonStyle}>
          PowerContact 2
        </Button>{" "}
        <Divider />
        <Button color="primary" variant="text" fullWidth style={buttonStyle}>
          ContiCrossContact LX20
        </Button>
        <Divider />
        <Button color="primary" variant="text" fullWidth style={buttonStyle}>
          SportContact 6
        </Button>
        <Divider />
      </Collapse>
      <Divider />
      <Button
        color="Primary"
        variant="text"
        fullWidth
        style={buttonStyle}
        onClick={() =>
          subMenuOpened == 2 ? setSubMenuOpened(-1) : setSubMenuOpened(2)
        }
      >
        Pirelli
        {subMenuOpened == 2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Collapse in={subMenuOpened == 2}>COLLAPSE DO SAIR</Collapse>
      <Divider />
      <Typography
        variant="h6"
        color="primary"
        style={{
          fontFamily: "Biome",
          fontWeight: 450,
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#690000",
          color: "#ebebeb",
        }}
      >
        Principais Medidas
      </Typography>
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 195 55 r15
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 205 55 r16
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 275 80 r22 5
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 265 65 r17
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 245 70 r16
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 235 70 r16
      </Button>{" "}
      <Divider />
      <Button color="Primary" variant="text" fullWidth style={buttonStyle}>
        Pneu 235 55 r17
      </Button>
    </div>
  );
}
