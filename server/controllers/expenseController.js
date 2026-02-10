const Expense = require("../models/Expense.js");

//Post request to create expense
const createExpense = async (req,res) => {

    try{
        const expense = await Expense.create(req.body);

        res.status(201).json(expense);
    }
    catch(error){
        res.status(500).json({
            message: "Failed to create expense",
            error: error.message
        });
    }


};

module.exports = {createExpense};