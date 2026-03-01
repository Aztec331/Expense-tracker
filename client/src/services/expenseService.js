import axios from "axios";

//Base URL for Expense endpoints
const API_URL = "http://localhost:5000/expenses";

//function with 1 parameter
//Post api function to create an expense
const createExpense = async (expenseData) => {

    const response = await axios.post(API_URL, expenseData);
    return response.data;

};

//function with no parameters
//Get api function to fetch all expenses
const getExpenses = async () => {

    const response = await axios.get(API_URL);
    return response.data;

};


export {createExpense, getExpenses};
