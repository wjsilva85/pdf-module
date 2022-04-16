"use strict";
const express = require("express");
const app = express();
const path = require("path");
var dir = path.join(__dirname, "assets");
console.log(dir);

app.set("view engine", "ejs");
app.set("views", "reports");
app.use(express.static(dir));

app.get("/", (req, res) => {
  const data = {
    propertyOwnerName: "Wellington Silva",
    propertyOwnerCPF: "32876593831",
    dateNow: {
      day: "29",
      month: "julho",
      year: "1985",
    },
    brokerName: "Okada",
    coverages: [
      { description: "Valor Aluguel", value: "1500.00" },
      { description: "Valor Condomínio", value: "650.00" },
      { description: "Valor Água", value: "120.00" },
      { description: "Valor Luz", value: "160.00" },
      { description: "Valor Gás Encanado", value: "230.00" },
    ],
    bailId: 25,
    basicData: {
      beneficiaryList: [
        { name: "Wellington J Silva", cpf: "32876593831" },
        { name: "Kellen dos S Zamperlini", cpf: "31736833820" },
      ],
      riskAddress: {
        street: "Rua Teixeira de Melo",
        number: "127",
        complement: "AP 153A",
        neighborhood: "Tatuapé",
        city: "São Paulo",
        estate: "São Paulo",
        zipcode: "03067000",
      },
      durationInMonth: "24",
      contractDestination: "Residencial",
      documentType: "Pessoa Física",
    },
  };

  res.render("budget", data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and listening on localhost:${port}.`);
});
