const { response } = require("express");

const amount = document.querySelector("#inputNumber");
const currency = document.querySelector("#currencySelect");
const convertbtn = document.querySelector("#convertbtn");
const result = document.querySelector("#displayResult");

const API_KEY = "fGqtg1X2CZRDxYwBsS2NOpg==e950VoZXGOML6SuO";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?";

convertbtn.addEventListener("click", () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiUrl + currencyTotal;

  fetch(url, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rate;
      result = amount * rate;
      result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      result.innerHTML = "an error occured please try again ";
    });
});
