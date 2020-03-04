import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './App.css';


const Currencycard = props => {
  
  const [value,setValue] = useState(1);
  const fromCurrency = useSelector(state => state.currencyFrom);
  
  return (
        <div className="inner-container card-from" >
              <div className="selected-currency">
                <img src={"/Flags/"+fromCurrency.id.toLowerCase()+".svg"} className="currency-icon" alt="currency converted"/>
                <div className="currency-info">
                  <p className="symbol">{fromCurrency.id}</p>
                  <p className="currency-description">{fromCurrency.name}</p>
                </div>
              </div>
              <input placeholder="Enter the amount here" className="amount-label" type="text" name="from" onChange={(e) => props.amount(e.target.value)}/>
          </div>
  );

}


export default Currencycard;