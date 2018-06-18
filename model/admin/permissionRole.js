import DataTypes from 'sequelize'
import sequelize from '../../config/newDb'
/**
 * 权限_角色关系实体
 */
const PermissionRole = sequelize.define('permission_role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    permission_id: {
        type: DataTypes.INTEGER
    }
})

module.exports = PermissionRole;