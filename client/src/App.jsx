import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Test from './Test'


function App() {


  
  return (
    <>
    

    <h1>Expense Tracker</h1>
    <ExpenseForm />
    <hr/>
    <ExpenseList />

    {/* <Test /> */}


      
    </>
  )
}

export default App
