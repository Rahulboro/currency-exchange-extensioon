require("dotenv").config();

document.addEventListener("DOMContentLoaded", function () {
  const amount = document.querySelector("#inputNumber");
  const currency = document.querySelector("#currencySelect");
  const convertbtn = document.querySelector("#convertbtn");
  const result = document.querySelector("#displayResult");

  const API_KEY = `${process.env.API_KEY}`;
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_AUD";

  convertbtn.addEventListener("click", () => {
    const amountTotal = amount.value;
    console.log("total", amountTotal);
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        console.log("rate", rate);
        const resultPrice = amount * rate;
        console.log("result", resultPrice);
        result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(
          2
        )} USD`;
      })
      .catch((error) => {
        console.error("Request failed:", error);
        result.innerHTML = "an error occured please try again ";
      });
  });
});
