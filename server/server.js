import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expenses from "./routes/expense.js";
import incomes from "./routes/income.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/expenses", expenses);
app.use("/incomes", incomes);

// Start the Express Server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});