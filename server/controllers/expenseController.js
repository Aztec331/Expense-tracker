const Expense = require("../models/Expense.js");

//Post request to create an expense
const createExpense = async (req,res) => {

    try{
        const expense = await Expense.create(req.body);

        res.status(201).json(expense);
    }

    
    catch(error){
        res.status(500).json({
            message: "Failed to create expense behenchod",
            error: error.message
        });
    }

};

//Get all Expenses
const getExpenses = async (req,res) => {

    try{
        const expenses = await Expense.find().sort({createdAt: -1});
        res.status(200).json(expenses);
    }
    catch(error){
        res.status(500).json({
            message: "Failed to fetch expenses",
            error: error.message
        });
    }

};



module.exports = {
    createExpense,
    getExpenses
};