const {Router} = require('express')
const generateUsers = require('../utils/mock.util')
const CustomError = require('../utils/errors/Custom.error')
const generateUserErrorInfo = require('../utils/errors/info.error')
const EnumError = require('../utils/errors/enum.error')

const router = Router()


router.get('/',(req,res)=>{
    const {numUsers = 1} = req.query
    const user = generateUsers(numUsers)
    
    res.json({message: user})

})

router.get('/string',(req,res)=>{
    let string ='Hola Coder!!'

    for(let i = 0; i< 10e5;i++){
        string += 'Hola Coder!!'
    }
    res.send(string)
})

const users = []
router.post('/',(req,res)=>{
    const {first_name,last_name,email,age} = req.body
    if(!first_name || !last_name || !email){
        CustomError.createError({
            name: 'User creation Error',
            cuase:generateUserErrorInfo({first_name,last_name,email}),
            message:'Error trying to create an user',
            code: EnumError.INVALID_TYPES_ERROR,
        })
    }
    const user= {
        first_name,
        last_name,
        age,
        email
    }

    if(user.length ===0){
        user.id = 1
    }else {
        user.id = users[users.length - 1].id + 1 
    }
    users.push(user)

    res.json({message : user})

})

module.exports = router