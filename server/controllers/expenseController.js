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


//Delete request to delete an expense
const deleteExpense = async (req,res) => {

    try{
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if(!expense){
            return res.status(404).json({message: "Expense not found"});
        }

        res.status(200).json({message: "Expense deleted successfully"});
    }

    catch(error){
        res.status(500).json({
            message: "Failed to delete expense",
            error: error.message
        });
    }
};


//Update request to update an expense
const updateExpense = async (req,res) => {
    
    try{
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );

        if(!expense){
            return res.status(404).json({message: "Expense not found"});
        }

        res.status(200).json(expense);
    }

    catch(error){
        res.status(500).json({
            message: "Failed to update expense",
            error: error.message
        });
    }

};



module.exports = {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense
};