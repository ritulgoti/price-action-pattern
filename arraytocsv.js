let candles =  []

const fs = require('fs');

// Sample array to add to the CSV file

// Read the existing CSV file
const existingData = fs.readFileSync('BankNifty_1m_5years.csv', 'utf8');

// Parse the existing CSV data into an array (assuming it's a simple CSV)
const existingArray = existingData.split('\n').map(line => line.split(','));

candles = candles.map(subArray => subArray.slice(0, -1));
const formattedArray = candles.map(subArray => [
    subArray[0].replace('T', ' ').replace(/[\+\-]\d{4}$/, ''),
    ...subArray.slice(1)
]);
// Add the new array to the existing array
const combinedArray = existingArray.concat(formattedArray);

// Convert the combined array back to a CSV-formatted string
const newCSVContent = combinedArray.map(row => row.join(',')).join('\n');

// Write the updated CSV content back to the file
fs.writeFileSync('BankNifty_1m_5years.csv', newCSVContent, 'utf8');
