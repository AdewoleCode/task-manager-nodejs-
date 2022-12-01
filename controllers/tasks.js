const Task = require('../models/tasksModel')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks: tasks})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
    // res.send('get all task from the database')
}

const createNewTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        console.log(req.body);        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})

        if (!task){
            return res.status(404).json({msg: `no task with the id of ${taskID} found`})
        }
        res.status(200).json({task: task})
    
    } catch (error) {
        res.status(500).json({msg: error})
    }

}

const updateSingleTask = (req, res) => {
    res.send('update/change an existing task')
}

const deleteSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.deleteOne({_id: taskID})
    
        if (!task) {
            return res.status(404).json({msg: `no task with the id of ${taskID} found in the database` })
        }
        res.status(200).json({task: task})    
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
}