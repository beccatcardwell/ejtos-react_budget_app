import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) return alert('You cannot reduce budget lower than current expenses total')
        if (parseInt(event.target.value) > 20000) return alert('Budget cannot exceed 20,000')
       
            setNewBudget(event.target.value)
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            })
            return
     
    }
    return (
<div className='alert alert-secondary'>
<span>Budget:&nbsp;{currency}</span>
<input type="number" step="10" value={newBudget} onChange={(event)=> handleBudgetChange(event)}></input>
</div>
    );
};
export default Budget;
