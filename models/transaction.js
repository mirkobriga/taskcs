const csv = require('csv')
const fs = require('fs')
const { convertCurrency } = require('../services/currency')
/**
 * I could use csvtojson from https://www.npmjs.com/package/csvtojson that is more simple but this way is more similar to use a database
 * @param {Function} callback 
 */
const getAll = (callback) => {
    let results = []
    fs.createReadStream('data.csv')
        .pipe(csv.parse({
            delimiter:';',
            columns: true
        }))
        .on('data', (data) => {
            results.push({
                ...data,
                value: convertCurrency(data.value)
            })
        })
        .on('end', ()=>callback(results))
}

/**
 * I could use csvtojson from https://www.npmjs.com/package/csvtojson that is more simple but this way is more similar to use a database
 * @param {Function} callback 
 */
const getById = (id, callback) => {
    let results = []
    fs.createReadStream('data.csv')
        .pipe(csv.parse({
            delimiter:';',
            columns: true
        }))
        .on('data', (data) => {
            if(id == data.customer)
                results.push({
                    ...data,
                    value: convertCurrency(data.value)
                })
        })
        .on('end', ()=>callback(results))
}

module.exports = {
    getAll, getById
}