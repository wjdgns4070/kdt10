const { Sequelize, DataTypes } = require("sequelize");

const TeamModel = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        Team_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30), // 적절한 데이터 타입 지정 (예: STRING)
            allowNull: false
        },
    },{
        freezeTableName:true
    });

    return Team;
}

module.exports = TeamModel;
