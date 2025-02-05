import axios from "axios";

export default axios.create({
  baseURL: "https://perscholascapstone.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});
