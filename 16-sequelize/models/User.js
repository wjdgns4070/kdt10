const User = (sequelize, DataTypes) => {
    const model = sequelize.define(
        'user', {
            id: {
                type: DataTypes.INTEGER, // 오타 수정: IMTEGER → INTEGER
                allowNull: false,
                primaryKey: true, // 오타 수정: PrimaryKey → primaryKey
                autoIncrement: true
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            }
        }, {
            tableName: 'user2',
        }
    );
    return model; // 모델을 반환해야 합니다.
};

module.exports = User;
