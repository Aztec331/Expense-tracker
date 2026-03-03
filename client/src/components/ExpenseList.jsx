import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseService";

export default function ExpenseList(){

    const [expenses, setExpenses] = useState([]);

    // #1 Entire component function runs which means run
    // fetchExpenses function and register the useEffect 
    // and then return the UI to be painted on the screen
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

    
    //#3 after UI is painted on screen, useEffect runs
    //We use sudeEffects to to call api
    //fetchExpenses calls the getExpenses api
    useEffect(

        () => {

            console.log("useEffect called");
            fetchExpenses();
            
        },[expenses]


    );

    // #2 After componnet is rendred, UI is painted on the screen
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