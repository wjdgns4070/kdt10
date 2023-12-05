// TODO : Visitor 모델 정의
//테이블 구조를 정의한다 라고 생각
// 시퀄라이즈 모델이랑 mysql 테이블 연결
const User = (Sequelize, DataTypes) => {
    //Sequelize 는 models/index.js 에서의 sequelize 를 넘겨받음
    //DataTypes 는 models/index.js 에서의 Sequelize 를 넘거받음

    const model = Sequelize.define(
'User', //param1 : 모델이름 설자
    {
        id: {
            type: DataTypes.INTEGER,
            allowNell: false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING(10),
            allowNell: false
        },
        comment: {
            type: DataTypes.TEXT('medium') 
        }
    }, // param2: 컬럼 정의
    {
        tableName: 'User', // 실제 DB에 있는 테이블 Name을 명시가능
        freezeTableName: true, // 첫번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
        //시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 가져가요
        // charset, collate 값이 있는데 db 정의할 때 한글 인코딩 가능하도록 만들어뒀기 때문에 따로 설정 필요 x
        timestamps: false,
        // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함
    }

)
return model;
}

module.exports = User;
