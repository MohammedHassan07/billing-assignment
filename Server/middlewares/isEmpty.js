// function to check the values are not empty 
module.exports = function checkIsEmpty(req, res, next) {

    const data = req.body
    // console.log(req.body)

    for (let key in data) {

        if (data.hasOwnProperty(key)) {

            if (data[key] === undefined || data[key] === null || data[key] === '')

                return res.status(400).json({ message: 'All fields are required' })
        } else
            return res.status(400).json({ message: 'All fields are required' })
    }
    next()
}