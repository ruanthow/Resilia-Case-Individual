const { Model, DataTypes } = require("sequelize")
const sequelize = require('../config/conection')
class Game extends Model { }

Game.init({
    id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name_game: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize,
    modelName: "Game",
    timestamps: false
})

module.exports = Game;