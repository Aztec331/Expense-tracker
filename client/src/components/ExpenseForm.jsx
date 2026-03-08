import { useState } from "react";
import { createExpense,updateExpense } from "../services/expenseService";

export default function ExpenseForm( {
    fetchExpenses,
    editingExpense,
    setEditingExpense} ){

    //formData is just an object
    //object is as same as json on postman
    const [formData,  setFormData] = useState( {
        title:"",
        amount:"",
        category:"",
        date:""
    } );

    const handleChange = (e) =>{

        const {name, value} = e.target;

        setFormData( (prevData)=> ({
            ...prevData,
            [name]:value
        }) )

    }
    
    //handleSubmit function of the form
    //handles both create + update functionality
    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            const response = await createExpense(formData);
            console.log("Expense created", response);

            alert("Expense added successfully");

            fetchExpenses(); // refresh the list of expenses 

            //Reset form
            setFormData({
                title:"",
                amount:"",
                category:"",
                date:""
            }); 

        }


        catch(error){

            console.error("Error creating expense:", error);
            alert("Failed to create expense");
            
        }
        
    };

    return(

        <>
        <h2>Add Expenses</h2>

        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            />

            <input 
            type="number" 
            name="amount"
            placeholder="Amount"
            value={formData.amount} 
            onChange={handleChange}
            required
            />

            <input 
            type="text" 
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            />

            <input 
            type="date" 
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
            />
            
            <button type="submit">Add new expense</button>

        </form>


        </>
    )
    
}