const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Player = require('./Player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);
const Team = require('./Team')(sequelize, Sequelize); // 수정된 부분

Player.hasOne(Profile, {
  foreignKey: 'player_id',
  sourceKey: 'player_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Profile.belongsTo(Player, {
  foreignKey: 'player_id',
  targetKey: 'player_id',
});

Team.hasMany(Player, { foreignKey: 'team_id', sourceKey: 'team_id' });
Player.belongsTo(Team, {
  foreignKey: 'team_id',
  targetKey: 'team_id',
});

// TODO: 관계 정의한 모델들을 DB에 객체 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team; // 수정된 부분
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
