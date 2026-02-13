import axios from "axios";

//Base URL for Expense endpoints
const API_URL = "http://localhost:5000/expenses";

//Post api function to create an expense
const createExpense = async (expenseData) => {
    const response = await axios.post(API_URL, expenseData);
    return response.data;
};

export {createExpense};
