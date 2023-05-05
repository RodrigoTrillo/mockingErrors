const express = require('express')
const compression = require('express-compression')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
const errorHandler = require('./middlewares/errors/handler.errors')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(morgan('dev'))
app.use(compression({
    brotli:{enable:true,zlib: {}},
}))

app.use(errorHandler)

router(app)




app.listen(port ,()=>{
    console.log(`server runnin at port ${port}`)
})


