import React from 'react';
import {useSelector} from 'react-redux';

const Resultcard = props => {

 	const toCurrency = useSelector(state => state.currencyTo);

	return (
		<div className="inner-container card-to" >
			<div className="selected-currency">
				<img src={"/Flags/"+toCurrency.id.toLowerCase()+".svg"} className="currency-icon" alt="currency converted"/>
				<div className="currency-info">
					<p className="symbol">{toCurrency.id}</p>
					<p className="currency-description">{toCurrency.name}</p>
				</div>
			</div>
			<p className="amount-label">{props.result.toFixed(2)+" "+toCurrency.id}</p>
		</div>
	);
}


export default Resultcard;