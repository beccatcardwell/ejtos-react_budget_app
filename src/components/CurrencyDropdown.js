import React, { useContext } from "react"
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const {dispatch, currency } = useContext(AppContext)

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }
    return (
        <>
            {/* <label className="input-group-text" htmlFor="currency">Currency ()</label> */}
            <select value={currency} id="currency" name='currency' onChange={handleCurrencyChange}>
                <option value='$'>&#36; Dollar</option>
                <option value='£'>&pound; Pound</option>
                <option value='€'>&euro; Euro</option>
                <option value='₹'>&#8377; Rupee</option>
            </select>
        </>
    )
}

export default CurrencyDropdown