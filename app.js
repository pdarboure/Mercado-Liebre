let express = require("express");

let app = express()

let path = require("path")

const PORT = process.env.PORT || 8000;

const mainRouter = require("./routes/routerProducts")

app.use(express.static('public'));

app.use(mainRouter)

app.listen(PORT, function () {
    console.log("Levantando el servidor " + PORT);
})