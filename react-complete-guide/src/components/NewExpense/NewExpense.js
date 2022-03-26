import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredData) => {
        const expense = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(expense);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (

        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};
export default NewExpense;