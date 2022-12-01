const mongoose = require('mongoose')

// const connectionString = ''



const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}
// .then(()=> {
//     console.log('conected');
// }).catch(()=> {
//     console.log('error');
// })

module.exports = connectDB