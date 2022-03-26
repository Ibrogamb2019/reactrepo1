import './ExpenseFilter.css';
import React from 'react';
const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Select Date</label>
                <select onChange={dropDownChangeHandler}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>

                </select>

            </div>
        </div>
    );
};
export default ExpenseFilter;