import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList'
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense => {

        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter onChangeFilter={changeFilterHandler} />
                <ExpensesChart expenses1={filteredExpenses} />
                <ExpenseList item={filteredExpenses} />

            </Card>
        </div>
    );
}
export default Expenses;
