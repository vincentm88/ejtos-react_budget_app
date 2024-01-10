import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';




const Currency = () => {
    const { currency, currencies, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    };
    return (
        <div>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: 'lightgreen'}}>
                    Currency ({currency} {currencies.map((c)=>(c.symbol===currency && c.name ))})
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{backgroundColor: 'lightgreen'}}>
                    {currencies.map((c)=>(
                        <li><button onClick={handleCurrencyChange} class="dropdown-item" value={c.symbol}>{c.symbol} {c.name}</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Currency;