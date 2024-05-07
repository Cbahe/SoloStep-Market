const {shoe} = require('./seedData.js');

const {sequelize} = require('./db');
const {Shoe} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(shoe.map(shoe => Shoe.create(shoe)));


        console.log("db populated!");
    } catch (error) {
        console.error(error);
    } 
}

seed();