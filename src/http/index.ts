import axios from "axios";

const http = axios.create ({
  baseURL: "https://api.hgbrasil.com/weather?format=json-cors&key=2f6f667f&city_name="
});

export default http;