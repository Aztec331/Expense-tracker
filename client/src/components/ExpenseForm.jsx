import { useState } from "react";
import { createExpense } from "../services/expenseService";


export default function ExpenseForm(){

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

        setFormData( (prevData) )

    }

    //handleSubmit function of the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await createExpense(formData);
            console.log("Expense created", response);

            alert("Expense added successfully");

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
        <h2>Add Expense</h2>

        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
            />

            <input 
            type="number" 
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            required
            />

            <input 
            type="text" 
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
            />

            <input 
            type="text" 
            name="date"
            placeholder="Date"
            onChange={handleChange}
            required
            />

            <button typeof="submit">Add Expense</button>

        </form>


        </>
    )
}