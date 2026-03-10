import { useState,useEffect } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'  
import { getExpenses } from './services/expenseService'

function App() {

  const [expenses, setExpenses] = useState([]);

  const [editingExpense, setEditingExpense] = useState(null);

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
            
    },[]


  );


  // #2 After componnet is rendred, UI is painted on the screen
  return (
    <>
    

    <h1>Expense Tracker</h1>

    <ExpenseForm 

    fetchExpenses={fetchExpenses}
    //update the state of editingExpense
    editingExpense={editingExpense}
    setEditingExpense= {setEditingExpense}

    />


    <hr/>


    <ExpenseList 
    
    expenses={expenses} 
    fetchExpenses={fetchExpenses}
    //update the state of editingExpense
    setEditingExpense= {setEditingExpense}
    
    /> 

      
    </>
  )




}

export default App
