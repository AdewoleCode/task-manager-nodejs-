
const notFound = (req, res) => {
    res.status(404).json({msg: 'something went wrong, try again later'})
}


module.exports = notFound