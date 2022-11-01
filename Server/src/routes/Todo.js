const express = require('express')
const router = express.Router();
const Todo = require('../models/Todo')

//get all routes
router.get('/list',async (req, res) => {    
    const todos = await Todo.find()
    res.json(todos)
})



router.post('/new', async (req, res) => {
    const {author, todo} = req.body
    const newTodo = new Todo(
        //req.body // 
        {
            author ,
            todo
        }
    );
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

//Get By Id
router.get('/get/:id', async (req, res) => {
   
    const t = await Todo.findById({ _id : req.params.id})
    res.json(t)
})

//Delete By Id

router.delete('/delete/:id', async (req, res) => {
   
    const tDelete = await Todo.findByIdAndDelete({ _id : req.params.id})
    res.json(tDelete)
})

//Update By Id

router.put('/update/:id', async (req, res) => {
   
    const tUpdate = await Todo.updateOne(
        {
            author: "Thang Vu ",
            todo: "Go Fishing"
        }
    )
    res.json(tUpdate)
})

module.exports = router