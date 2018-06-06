import DataTypes from 'sequelize'
import sequelize from '../../config/newDb.js'

const Student = sequelize.define('student', {
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    birth: {
        type: DataTypes.DATE
    },
    idcard: {
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
})
module.exports = Student