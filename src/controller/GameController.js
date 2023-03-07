const GameModel = require("../model/GameModel");

module.exports = {
    async create(req, res) {
        try {
            const game = await GameModel.create({
                name_game: req.body.name_game,
                gender_name: req.body.gender_name,
                date_start: req.body.date_start,
                date_end: req.body.date_end,
                rating: req.body.rating
            })
            return res.json(game);
        } catch (error) {
            console.error(error);
            res.send("Houve um erro ao cadastrar o game, entre em contato com o adm.")
        }
    },

    async list(req, res) {
        try {
            const listGames = await GameModel.findAll();
            return res.json(listGames);
        } catch (error) {
            res.send("Houve um erro ao listar o game, entre em contato com o adm.")
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id
            const getNameGame = await GameModel.findByPk(id)
            GameModel.destroy({
                where: {
                    id_game: id
                }
            });
            return res.send(`O game ${getNameGame.name_game} foi deletado da lista`);
        } catch (error) {
            res.send("Houve um erro ao deletar o game, entre em contato com o adm.")
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id
            const getGame = await GameModel.findByPk(id)
            GameModel.update({
                name_game: req.body.name_game || getGame.name_game,
                gender_name: req.body.gender_name || getGame.gender_name,
                date_start: req.body.date_start || getGame.date_start,
                date_end: req.body.date_end || getGame.date_end,
                rating: req.body.rating || getGame.rating
            },
                {
                    where: {
                        id_game: id
                    },

                });
            return res.send(`As informações do game ${getGame.name_game} foram atualizadas`);
        } catch (error) {
            return res.send("Houve um erro ao atualizar o game, entre em contato com o adm.")
        }
    }
}
