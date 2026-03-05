import { useState,useEffect } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'


function App() {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () =>{

    try{
        const data = await getExpenses();
        setExpenses(data);
    }
    catch(error){
        console.error("Error fetching expenses:", error);
    }

    };


  useEffect(

    () => {

        console.log("useEffect called");
        fetchExpenses();
            
    },[]


  );


  
  return (
    <>
    

    <h1>Expense Tracker</h1>
    <ExpenseForm />
    <hr/>
    <ExpenseList />

      
    </>
  )
}

export default App
