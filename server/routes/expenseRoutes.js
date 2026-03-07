const express = require("express");
const router = express.Router();

const { createExpense, getExpenses, deleteExpense } = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

//POST /expenses
router.post("/", validateExpense,createExpense);
//Get Expenses
router.get("/", getExpenses)
//Delete Expense
router.delete("/:id", deleteExpense)

module.exports = router;