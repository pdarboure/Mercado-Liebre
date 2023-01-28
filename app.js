let express = require("express");

let app = express()

let path = require("path")

const { Http2ServerRequest } = require("http2");

const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
}); 
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
}); 
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
}); 


app.listen(PORT, function () {
    console.log("Levantando el servidor " + PORT);
})