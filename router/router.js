
const express = require('express')
const router = express.Router()

const { getAllTasks, createNewTask, updateSingleTask, getSingleTask, deleteSingleTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createNewTask)
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)



module.exports = router