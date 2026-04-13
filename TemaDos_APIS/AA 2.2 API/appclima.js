import axios from "axios";

const apiKey = "713112867f51178d158d3e5dcfaf2c59"; 
const ciudad = "Cancun";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

axios.get(url)
  .then(response => {
    console.log("Clima en Cancun:");
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });