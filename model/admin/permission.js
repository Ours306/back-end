import DataTypes from 'sequelize'
import sequelize from '../../config/newDb'
/**
 * 权限实体
 */
const Permission = sequelize.define('permission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    module_id: {
        type: DataTypes.INTEGER
    }
})
module.exports = Permission;