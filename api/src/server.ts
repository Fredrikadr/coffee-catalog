import express from "express";
import coffeeData from "../../data/CoffeeData.json";

const app = express();

app.get("/coffee-drinks", (req, res) => {
  res.send(coffeeData);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});