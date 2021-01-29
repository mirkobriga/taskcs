
const symbolMap = {
    "£": 1.13,
    "$": 0.82,
    "€": 1
}

const convertCurrency = (value) => {
    const [symbol, ...amount] = value.split('')
    return `€${(parseFloat(amount.join(''))*symbolMap[symbol]).toFixed(2)}`
}

module.exports = {
    convertCurrency
}