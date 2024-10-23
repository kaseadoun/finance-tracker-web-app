import express from "express";
import cors from "cors";
import expenses from "./routes/expense.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/expenses", expenses);

// Start the Express Server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});