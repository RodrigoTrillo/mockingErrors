const winston  = require('winston')

const customLevelOptions = {
    levels:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        debug:4,
    },
    colors:{
        fatal:'red',
        error:'orange',
        warning:'yellow',
        info:'blue',
        debug:'white',
    }
}


module.exports = customLevelOptions