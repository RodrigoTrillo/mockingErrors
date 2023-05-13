const { enviroment } = require("../app.config");

switch (enviroment) {
    case 'develoment':
        console.log('devLog')
        module.exports = require('./dev.logger')
        break;
        
        case 'production':
            console.log('prodLog')
            module.exports = require('./prod.logger')
        break;
}