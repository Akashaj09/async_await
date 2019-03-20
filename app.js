const axios = require('axios');


const getExchangeRate = async (from, to) => {
    let result = await axios.get('http://data.fixer.io/api/latest?access_key=3721b0ca91e28e4f38fc9281b8863e5a&format=1');
    let euro = 1/result.data.rates[from];
    let rate = parseFloat(euro) * parseFloat(result.data.rates[to]);
    return rate;
}

const getCountry = async (currency) => {
    let result = await axios.get("https://restcountries.eu/rest/v2/currency/"+currency);
    return result.data.map(country => country.name);
}

const convertCurrency = async (from, to) => {
    let countries = await getCountry(to);
    let exChangeRate = await getExchangeRate(from, to);
    return countries.map(country => {
        return {
            country,
            exChangeRate
        }
    });
}

convertCurrency('BDT', 'EUR').then(response => console.log(response)).catch(e => console.log(e.message));