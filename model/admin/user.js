import DataTypes from "sequelize";
import sequelize from "../../config/newDb";
/**
 * 用户实体
 */
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    birth: {
        type: DataTypes.DATE
    },
    tel: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    worknum: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = User