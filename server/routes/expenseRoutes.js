const express = require("express");
const router = express.Router();

const { createExpense, getExpenses, deleteExpense, updateExpense } = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

//POST /expenses
router.post("/", validateExpense, createExpense);
//Get Expenses
router.get("/", getExpenses)
//Delete Expense
router.delete("/:id", deleteExpense)
//Update Expense
router.put("/:id", updateExpense)

module.exports = router;