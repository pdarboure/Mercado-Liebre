let express = require("express");

let app = express()

let path = require("path")

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
    console.log("Levantando el servidor");
})

app.use(express.static(path.resolve(__dirname, 'public')));
