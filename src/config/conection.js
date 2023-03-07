const Sequelize = require("sequelize");

const conection = new Sequelize('TheGames', 'root', '', {
    storage: './src/db/db.sqlite',
    dialect: 'sqlite'
})

module.exports = conection;