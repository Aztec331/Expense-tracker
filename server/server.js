const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Expense Tracker API running");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
