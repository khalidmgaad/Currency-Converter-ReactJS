import {currencyFrom, currencyTo} from './currency';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
	currencyFrom : currencyFrom,
	currencyTo : currencyTo
});


export default allReducers;