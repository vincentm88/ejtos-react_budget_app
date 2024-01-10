import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, expenseTotal } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{expenseTotal}</span>
        </div>
    );
};
export default ExpenseTotal;