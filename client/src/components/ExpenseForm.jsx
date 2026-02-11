import { useState } from "react";
import { createExpense } from "../services/expenseService";


export default function ExpenseForm(){

    const [formData,  setFormData] = useState( {
        title:"",
        amount:"",
        category:"",
        date:""
    });

    //handleSubmit function of the form
    const handleSubmit = async (e) => {
        
    };

    return(
        <>
        <h2>Add Expense</h2>

        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            name="title"
            placeholder="Title"
            required
            />

            <input 
            type="number" 
            name="amount"
            placeholder="Amount"
            required
            />

            <input 
            type="text" 
            name="category"
            placeholder="Category"
            required
            />

            <input 
            type="text" 
            name="date"
            placeholder="Date"
            required
            />

            <button typeof="submit">Add Expense</button>

        </form>


        </>
    )
}