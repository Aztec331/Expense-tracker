const express = require("express");
const cors = require("cors");
require("dotenv").config();

//db connection code
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes")
const PORT = process.env.PORT || 5000;

const app = express();

//global middleware
app.use(express.json());
app.use(cors());

//connect to db
connectDB();

//routes
app.use("/expenses", expenseRoutes);


app.get("/", (req, res) => {
  res.send("Expense Tracker API running");
});




































//server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
