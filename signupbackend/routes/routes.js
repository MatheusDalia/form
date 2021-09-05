const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUTemplateCopy({
        username: request.body.username,
        address: request.body.address,
        date: request.body.date,
        order: request.body.order,

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.export = router 