import React,{ useState } from 'react';
import './App.css';
import {changeTo} from './actions';
import {changeFrom} from './actions';
import {useDispatch, useSelector} from 'react-redux';

const Currencies = props => {

	const dispatch = useDispatch();
	const [search,setSearch] = useState("");
	const [target,setTarget] = useState("from");

	const fromCurrency = useSelector(state => state.currencyFrom);
	const toCurrency = useSelector(state => state.currencyTo);

	const checkTarget = (val) => {
		return val==target ? val+" active" : val
	}

	const filterSearch = (e) => {
		setSearch(e.target.value)
	}

	const onTargetChanged = (newTarget) => {
		this.setState({target: newTarget});
		props.onTargetChanged(newTarget);
	}

	const currencyTapped = currency => {
		if (target == "from") {
			dispatch(changeFrom(currency))
		}
		else {
			dispatch(changeTo(currency))
		}
		props.updateRate()
	}

	const CheckSelected = currency => {
		if ((target=="from" && fromCurrency.id==currency) || (target=="to" && toCurrency.id==currency))
		{
			return "currency active"
		}
		else 
		{
			return "currency"
		}
	}

	return (
			<div className="currencies">
			<input className="searchbar" placeholder="Search..." type="text" onChange={filterSearch} />
				<div className="controls">
						<a className={"from"+(target=="from"?" active":"")} onClick={() => {setTarget("from")}} >From</a>
						<a className={"to"+(target=="to"?" active":"")} onClick={() => {setTarget("to")}} >To</a>
				</div>
				{props.currencies.filter((currency)=>{ return currency.id.toLowerCase().includes(search.toLowerCase()) || currency.name.toLowerCase().includes(search.toLowerCase())})
					.map((currency) => {
						return (
							<div key={currency.id} className={CheckSelected(currency.id)} onClick={() => {currencyTapped(currency)}} >
					          <img className="currency-icon" src={"Flags/"+currency.id.toLowerCase()+".svg"} alt="currency converted"/>
					          <div className="currency-info">
					            <p className="symbol">{currency.id}</p>
					            <p className="currency-description">{currency.name}</p>
					          </div>
					        </div>
						);
				})}
			</div>
		);

}

export default Currencies;