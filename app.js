
const express = require('express')
const app = express()
const taskRouter = require('./router/router')

const connectDB = require('./db/connect')

require('dotenv').config()

const notFound = require('./middlewares/not-found')

const errorHandlerMiddleware = require('./middlewares/error-handler')



//cos we are sending json from our app and we will need to access the data, we need to use the middleware to set it to json
//so that we'll have access to the data in req.body
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', taskRouter)

//incase the user is trying to access a resource that is not available on our server
app.use(notFound)

//errror handling middleware
app.use(errorHandlerMiddleware)


//app.get('api/v1/tasks')  to get all tasks to the server database
//app.post('api/v1/tasks')  to post new tasks to the server database
//app.post('api/v1/tasks/:id')  to get a single specific tasks in the database 
//app.patch('api/v1/tasks/:id')  to update/edit new tasks in the databse
//app.delete('api/v1/tasks/:id')  to delete/remove a task from the server


const port = process.env.PORT || 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log('server is lisening at localhost 3000');
        })        
    } catch (error) {
        console.log(error);
    }
}

start()
