const { Sequelize, DataTypes } = require("sequelize");

const PlayerModel = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        player_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30), // 적절한 데이터 타입 지정 (예: STRING)
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER, // 적절한 데이터 타입 지정 (예: STRING)
            allowNull: false,
        }
    },{
        freezeTableName:true
    });

    return Player;
}

module.exports = PlayerModel;
