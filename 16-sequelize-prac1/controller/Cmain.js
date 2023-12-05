const{ Player, Profile, Team } = require('../models/index')

exports.getPlayer = async (req,res)=> {
    try{
        const players =await Player.findAll()
        res.send(players)
    }
}