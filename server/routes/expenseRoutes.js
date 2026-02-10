const express = require("express");
const router = express.Router();

const { createExpense } = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

//POST /expenses
router.post("/", validateExpense,createExpense);

module.exports = router;