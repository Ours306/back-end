import DataTypes from 'sequelize'
import sequelize from '../../config/newDb'
/**
 * 角色实体
 */
const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
})
module.exports = Role;