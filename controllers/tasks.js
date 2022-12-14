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
        // console.log(req.body);        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleTask = async (req, res, next) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})

        if (!task){
            const error = new Error('not found')
            error.status = 404
            return next(error)
            // return res.status(404).json({msg: `no task with the id of ${taskID} found`})
        }
        res.status(200).json({task: task})
    
    } catch (error) {
        res.status(500).json({msg: error})
    }

}



const deleteSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.deleteOne({_id: taskID})
        // const task = await Task.findOneAndDelete({_id: taskID})

    
        if (!task) {
            return res.status(404).json({msg: `no task with the id of ${taskID} found in the database` })
        }
        res.status(200).json({task: task})    
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true})

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