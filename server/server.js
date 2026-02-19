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

//POST on http://localhost:5000/expenses
app.use("/expenses", expenseRoutes);






































//server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
