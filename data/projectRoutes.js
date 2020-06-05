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

router.put('/:id',(req,res)=>{
    const id = req.params.id
    Db.get(id)
    .then(item=>{
        if(item){
            Db.update(id, req.body)
                .then(item => {
                    Db.get(id)
                        .then(projects => res.status(200).json(projects))
                })


                .catch(err => res.status(500).json({ error: 'could not update user' }))

        }
    })
        .catch(() => res.status(400).json({ error: 'can not find user with that id' }))
   
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Db.remove(id)
    .then(item=>{
     Db.get()
     .then(projects=>res.status(200).json(projects))
    })
    .catch(err=>res.status(400).json({error:'can not delete user'}))
})

router.get('/:id/actions',(req,res)=>{
    const id = req.params.id

    Db.get(id)
    .then(user=>{
        if(user){
            Db.getProjectActions(id)
                .then(item => {
                    res.status(200).json(item)

                })
                .catch(() => {
                    res.status(400).json({ error: 'Can not fint that project ' })
                })

        } else {
            res.status(500).json({ error: 'can not find project with id' })
        }
    })

   
})

module.exports = router