const { Router } = require('express')
const { getAll, getById } = require('../models/transaction')

const router = Router()

router.get('/', (req, res)=>{
    getAll(data=>res.send(data))
})

router.get('/:id', (req, res)=>{
    getById(req.params.id, data=>res.send(data))
})

module.exports = router