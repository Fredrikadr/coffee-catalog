import express from "express";
import coffeeDrinkRoutes from "./routes/coffeeDrinkRoutes"
import cors from "cors";


const app = express();

app.use(cors());
app.use(coffeeDrinkRoutes);

export default app;