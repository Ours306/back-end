import DataTypes from 'sequelize'
import sequelize from '../../config/newDb'
/**
 * 实体:人
 */
const Person = sequelize.define('person', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: 'true',
            autoIncrement: 'true',
            unique: 'true',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: 'true',
            unique: 'false',
            defaultValue: 'jack',
            comment: '名称'
        },
})
module.exports = Person;