import React, { useState, useEffect } from 'react';
import './App.css';
import Currencies from './Currencies';
import Currencycard from './Currencycard';
import Resultcard from './Resultcard';
import {useSelector} from 'react-redux';


const App = () => {

	const fromCurrency = useSelector(state => state.currencyFrom);
	const toCurrency = useSelector(state => state.currencyTo);

	const [currencies,setCurrencies] = useState([]);
	const [amount,setAmount] = useState(0);
	const [rates,setRates] = useState({});
	const [rate,setRate] = useState(0);

	useEffect(() => {
		fetch("https://api.exchangeratesapi.io/latest")
		.then( (responce) => {
				console.log("FETCHING....")
				responce.json()
				.then((json) => {
					setupCurrencies(Object.keys(json.rates));
					setRates(json.rates);
					console.log("RATES> "+rates);

					var n1 = json.rates[fromCurrency.id];
					var n2 = json.rates[toCurrency.id];
					var newRate = 1/(n1/n2);
					setRate(newRate);
				})
			}
		)
	},[fromCurrency,toCurrency]);


	const setupCurrencies = (currKeys) => {
		fetch("currencies.json")
		.then( (responce) => {
				responce.json()
				.then((json) => {
					var currInfo = json.results;
					var currObjectArray = [];

					currKeys.map(key => {
						let currObjct = {
							id: key,
							name: currInfo[key].currencyName
						};
						currObjectArray.push(currObjct);
					});	

					setCurrencies(currObjectArray);
				});
			}
		)
	}

	const updateAmount = value => {
		setAmount(value);
	}

	const updateRate = () => {
		var n1 = rates[fromCurrency.id];
		var n2 = rates[toCurrency.id];
		var newRate = 1/(n1/n2);
		setRate(newRate);
	}

	return (
			<div className="App">
				<div className="container">
					<Currencycard amount={updateAmount} />
					<Resultcard result={amount*rate}/>
					<Currencies currencies={currencies} updateRate={updateRate} />
				</div>
			</div>
	);
}


export default App;





