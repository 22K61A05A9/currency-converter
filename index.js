const readline = require('readline');

// Fixed exchange rate
const exchangeRate = 83.0;  // 1 USD = 83 INR (example fixed rate)

// Function to convert currency
function convertCurrency(amount, fromCurrency) {
    if (fromCurrency === 'INR') {
        return (amount / exchangeRate).toFixed(2) + ' USD';
    } else {
        return (amount * exchangeRate).toFixed(2) + ' INR';
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the amount: ', (amount) => {
    if (isNaN(amount) || amount <= 0) {
        console.log('Please enter a valid number');
        rl.close();
        return;
    }
    rl.question('Select the currency to convert from (INR/USD): ', (currency) => {
        if (currency !== 'INR' && currency !== 'USD') {
            console.log('Invalid currency selection');
        } else {
            const convertedAmount = convertCurrency(parseFloat(amount), currency);
            console.log(`Converted amount: ${convertedAmount}`);
        }
        rl.close();
    });
});
