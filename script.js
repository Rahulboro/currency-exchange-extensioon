const { response } = require("express");

const amount = document.querySelector("#number");
const currency = document.querySelector("#currency");
const convertbtn = document.querySelector("#convertbtn");
const result = document.querySelector("#result");

const API_KEY = "";
const apiUrl = "";

convertbtn.addEventListener("click", () => {
  const amountNumber = amount.value;
  const currencychange = currency.value;
  const url = apiUrl + currencychange;

  fetch(url, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rate;
      result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`;
    })
    .catch((error) => {
      console.error("Request failed:", error).result.innerHTML =
        "an error occured please try again ";
    });
});
