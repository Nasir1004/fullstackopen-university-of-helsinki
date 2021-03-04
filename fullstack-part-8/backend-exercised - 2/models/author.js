const mongoose = require('mongoose')

const schema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        monlength: 4,
    },
    born: {
        type: Number,
    },
    bookCount: {
        type: Number,
        default: 0,
    }
})

module.exports = mongoose.model('Author', schema)