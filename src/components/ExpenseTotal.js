import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, expenseTotal, currency } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{expenseTotal}</span>
        </div>
    );
};
export default ExpenseTotal;