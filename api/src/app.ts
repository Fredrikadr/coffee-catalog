import express from "express";
import coffeeDrinkRoutes from "./routes/coffeeDrinkRoutes"

const app = express();

app.use(coffeeDrinkRoutes);

export default app;