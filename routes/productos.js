const productoscontrollers = require("../controllers/productosController")

app.get("/", productoscontrollers.index);
app.get("/login", productoscontrollers.login);
app.get("/register", productoscontrollers.register);