import { deleteExpense } from "../services/expenseService";

export default function ExpenseList( {
    expenses,
    fetchExpenses,
    setEditingExpense}) {

    const handleDelete = async (id) => {
        try{
            await deleteExpense(id);
            alert("Expense delted successfully !");
            fetchExpenses(); //refresh list
        }

        catch (error) {
            console.error("Delete failed:", error);
            alert("Failed to delete expense");
        }

    };



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

                    <button onClick={ () => setEditingExpense(expense) } >
                        Edit
                    </button>

                    <button onClick={ () => handleDelete(expense._id) } >
                        Delete madarchod
                    </button>

                </div>

            ))
                

            )
            
            
            }

            
        </>


    );




} //End of function