const express = require("express");
const router = express.Router();

const { createExpense, getExpenses } = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

//POST /expenses
router.post("/", validateExpense,createExpense);
//Get Expenses
router.get("/", getExpenses)

module.exports = router;