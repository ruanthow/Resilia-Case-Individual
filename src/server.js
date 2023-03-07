const express = require("express");
const cors = require("cors")
const conection = require("./config/conection");
const routes = require("./routes/routes")

conection.sync({ force: true }).then(() => console.log("Db sync"));
const app = express();


app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(4200, () => {
    console.log("Server is Runing !");
})