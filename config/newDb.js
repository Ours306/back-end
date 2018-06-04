const Sequelize = require('sequelize')

const env = "dev";

const config = require('./database.json')[env];


const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.driver,
        
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            freezeTableName: true,
            raw: true
        }
    }    
)
module.exports = sequelize