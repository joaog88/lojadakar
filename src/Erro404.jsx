import React from "react";
import { Typography } from "@material-ui/core";

export default function Erro404() {
  return (
    <div>
      <Typography variant="h4" color="black" style={{ fontWeight: 800, marginTop: "150px", textAlign: "center" }}>
        Acesso Negado, erro 404. Página não existe.
      </Typography>
    </div>
  );
}
