const generateUserErrorInfo = user =>{
    return `
    One or more properties were incomplete or not valid.
    List or required properties:
    first_name: nedd to be string, received:${user.first_name}
    last_name: nedd to be string, received:${user.last_name}
    email: nedd to be string, received:${user.email}
    `
}

module.exports = generateUserErrorInfo