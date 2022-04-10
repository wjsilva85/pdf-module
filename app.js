"use strict";
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "reports");

app.get("/", (req, res) => {
  const data = {
    propertyOwnerName: "Wellington Silva",
    propertyOwnerCPF: "32876593831",
    coverages: [
      { description: "Valor Aluguel", value: "1500.00" },
      { description: "Valor Condomínio", value: "650.00" },
      { description: "Valor Água", value: "120.00" },
      { description: "Valor Luz", value: "160.00" },
      { description: "Valor Gás Encanado", value: "230.00" },
    ],
  };

  res.render("budget", data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and listening on localhost:${port}.`);
});
