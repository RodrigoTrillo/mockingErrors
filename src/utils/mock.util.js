const {faker} = require('@faker-js/faker')

faker.locale='es'

const generateUsers = numUsers=>{
    const users = []
    for(let i = 0; i < numUsers; i++){
        users.push(generateUser())
    }

    return users
}

    const generateUser = ()=>{

        const numOfProducts = faker.random.numeric(1,{bannedDigits:['0']})
        const products = []
        for(let i = 0; i < numOfProducts; i++){
            products.push(generateProducts())
    }
    
    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        birtDate: faker.date.birthdate(),
        phone : faker.phone.number(),
        role:faker.helpers.arrayElement(['cliente', 'vendedor']),
        image: faker.internet.avatar(),
        job:faker.name.jobType(),
        title:faker.name.jobTitle(),
        product:products,
    }
}


const generateProducts = ()=>{
    return{
        id:faker.database.mongodbObjectId,
        title:faker.commerce.productName(),
        price:faker.commerce.price(),
        stock:faker.random.numeric(1,{bannedDigits:['0']}),
        description :faker.lorem.lines(),
        image:faker.image.image()
    }
}


module.exports = generateUsers