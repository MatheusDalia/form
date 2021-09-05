const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    orderNumber:{
        type:String,
        required: true
    },

})

module.exports = mongoose.model('NewOrder', signUpTemplate)