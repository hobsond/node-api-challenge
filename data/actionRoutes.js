const router = require('express').Router()
const Db = require('./helpers/actionModel')


router.post('/:id',(req,res)=>{
    const id = req.params.id
    const data = req.body

    data.project_id = Number(id)
    Db.insert(data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json({error:'We cann not add '}))
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    Db.get(id)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(()=>res.status(400).json({error:'can not find acition with that id'}))
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    const data = req.body
    Db.update(id,data)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(()=>res.status(400).json({error:'could not update that id '}))
})

module.exports = router