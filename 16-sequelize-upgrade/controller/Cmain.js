const { Op } = require("sequelize");
const { Player, Profile, Team } = require("../models/index");



exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.send(players);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.getPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const player = await Player.findOne({
            where: { player_id },
        });
        res.send(player);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.postPlayer = async (req, res) => {
    try {
        const { name, age, team_id } = req.body;
        const newPlayer = await Player.create({
            name,
            age,
            team_id,
        });
        res.send(newPlayer);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.patchPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const { team_id } = req.body;

        const updatedPlayer = await Player.update(
            {
                team_id,
            },
            {
                where: { player_id },
            },
            res.send(updatedPlayer)
        );
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.parmas;
        const isDeleted = await Player.destroy({
            where: { player_id },
        });

        if (isDeleted) {
            res.send({ isDeleted: true });
        } else {
            res.send({ isDeleted: false });
        }
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.getTeams = async (req, res) => {
    try {
        // 쿼리 스트링으로 조회 기준 설정
    } catch { }
};

exports.getTeams = async (req, res) => {
    try {
        // 쿼리 스트링으로 조회 기준 설정
        const { sort, search } = req.query;
        let teams;

        // sort키가 있는 경우 Name 기준 오름차순 설정
        if (sort === "name_asc") {
            teams = await Team.findAll({
                attributes: ["team_id", "name"],
                order: [["name", "asc"]],
            });
        } else if (search) {
            // search key에 대한 값이 있다면
            teams = await Team.findAll({
                attributes: ["team_id", "name"],
                where: {
                    name: { [Op.like]: `%${search}%` },
                },
            });
        } else {
            teams = await Team.findAll({
                attributes: ["team_id", "name"],
            });
        }

        res.send(teams);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            attributes: ["team_id", "name"],
            where: { team_id },
        });
        res.send(team);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};

exports.getTeamPlayers = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            where: { team_id },
            include: [{ model: player }],
            // join과 같은 역할
        });
        res.send(team);
    } catch (err) {
        console.error(err);
        res.send("internal server error!");
    }
};
