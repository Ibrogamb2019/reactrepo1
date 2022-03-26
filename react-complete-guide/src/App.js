import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';
const DUMMY_DATA = [
  {
    id: '1',
    title: "Car Insurance",
    amount: 1000,
    date: new Date(2012, 3, 1)
  },
  {
    id: '2',
    title: "House repairs",
    amount: 4000,
    date: new Date(2022, 6, 3)
  },
  {
    id: '3',
    title: "Food",
    amount: 5000,
    date: new Date(2021, 9, 3)

  }

];



const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;