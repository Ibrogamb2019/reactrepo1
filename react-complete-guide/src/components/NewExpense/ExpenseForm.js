import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const changeAmountHandler = (event) => {
        setAmount(event.target.value);
    };
    const changeDateHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)

        };


        props.onSaveExpenseData(expense);
        setTitle('');
        setAmount('');
        setDate('');
    };





    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>

                <input type="number" value={enteredAmount} onChange={changeAmountHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date 1</label>
                <input type="date" min="2019-01-01" max="2022-12-12" value={enteredDate} onChange={changeDateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">

            <button type="submit">Add Expenses</button>
        </div>
        <div className="new-expense__actions">

            <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>




    </form>
}
export default ExpenseForm;