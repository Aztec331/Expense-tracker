import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
function App() {


  
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
