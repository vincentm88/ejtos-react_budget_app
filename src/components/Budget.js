import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenseTotal, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let requestedBudget = event.target.value;
        let budgetUpperLimit = 20000;
        if(requestedBudget > budgetUpperLimit){
            alert("The value cannot exceed the upper limit of "+currency+budgetUpperLimit)
            setNewBudget(budgetUpperLimit);
            return;
        }
        if(requestedBudget < expenseTotal){
            alert("The value cannot be below your total expenses of "+currency+expenseTotal)
            setNewBudget(budgetUpperLimit);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>

</div>
    );
};
export default Budget;