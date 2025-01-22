const { shoe } = require('./seedData.js');
const { sequelize, Shoe } = require('./db'); // Ensure Shoe is imported from db.js

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

module.exports = seed;
