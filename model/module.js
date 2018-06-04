import DataTypes from 'sequelize'
import sequelize from '../config/newDb.js'

// const Module = sequeli
const Module = sequelize.define('module', {
    name: {
        type: DataTypes.STRING
    },
    parentId: {
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    router: {
        type: DataTypes.STRING
    },
    hasChild: {
        type: DataTypes.INTEGER
    }
})
module.exports = Module