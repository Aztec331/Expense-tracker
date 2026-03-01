import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseService";

export default function ExpenseList(){

    const [expenses, setExpenses] = useState([]);


    //get expenses from backend 
    //this is not the api call, this is just a function to call the api function
    const fetchExpenses = async () =>{

        try{
            const data = await getExpenses();
            setExpenses(data);
        }
        catch(error){
            console.error("Error fetching expenses:", error);
        }

    };

    //We use sudeEffects to to call api
    //fetchExpenses calls the getExpenses api
    useEffect(

        () => {
            fetchExpenses();
        },[]


    );


    return(

        <>

            <h2>All Expenses</h2>

            {expenses.length === 0 ? 
            //if statement
            (
                <p>No expenses found.</p>
            ):
            //else statement
            (


            //map function 
            expenses.map( (expense) =>(

                <div key={expense._id}>

                    <p>
                        {expense.title} - ${expense.amount} - {expense.category} - {new Date(expense.date).toLocaleDateString()}
                    </p>

                </div>

            ))
                

            )
            
            
            }






        </>


    );




} //End of function