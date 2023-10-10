import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24c4531d012c4e36b36040f982dce5b5"
  }
});
