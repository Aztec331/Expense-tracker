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
//Get api function to fetch all expenses And return the data
const getExpenses = async () => {

    const response = await axios.get(API_URL);
    return response.data;

};

//function with id parameter
//delete api function to delete an expense 
const deleteExpense = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

//function with 2 parameters
//put api function to update an expense
const updateExpense = async (id, expenseData) => {
  const response = await axios.put(`${API_URL}/${id}`, expenseData);
  return response.data;
};

export { createExpense, getExpenses, deleteExpense, updateExpense };

