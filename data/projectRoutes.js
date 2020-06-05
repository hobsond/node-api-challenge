const router = require('express').Router()
const Db = require('./helpers/projectModel')

router.get('/',(req,res)=>{
    res.send('hello')
})

module.exports = router