const router = require('express').Router()
const Db = require('./helpers/projectModel')

router.get('/',(req,res)=>{
    Db.get()
    .then(item=>{
        if(item){
            res.status(200).json(item)
        }
        else{
            res.status(400).json({err:'Could not find projects'})
        }
    })
})

router.post('/',(req,res)=>{
    const {name,description}= req.body
    if(name && description){
        Db.insert(req.body)
        .then(item=>{
            res.status(200).json(item)
        })
        .catch(err=>res.status(500).json({error:'Could not add project'}))

    }

    else{
        res.status(400).json({error:'Please include name and description'})
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    Db.get(id)
    .then(item=>{
        res.status(200).json(item)
    })
    .catch(err=>res.status(400).json({error:'could not find user at that id'}))
})

module.exports = router