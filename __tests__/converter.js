const { convertCurrency } = require('../services/currency')

describe('converter:tests unit', ()=>{
    test('convert pound to eur', (done)=>{
        expect(convertCurrency("£1")).toBe("€1.13")
        done()
    })
    test('convert dollar to eur', (done)=>{
        expect(convertCurrency("$1")).toBe("€0.82")
        done()
    })
})