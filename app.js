var express        = require("express"),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

require("ejs");
require(__dirname + "/utilities/seedDb")();
var app = express();
var dbUrl = process.env.DATABASE_URI || "mongodb://localhost/pakittie-registry";
mongoose.connect(dbUrl);
var flash = require("connect-flash");

app.use(bodyParser.urlencoded({extended: true}));
// use to adhere to rest routes using forms
app.use(methodOverride("_method"));

app.use(require("cookie-parser")('a bcd cat'));
app.use(require("express-session")({
    secret: "i-love-pakittie",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

var indexRoutes = require(__dirname + "/routes/index");

var RegistryEntry = require(__dirname + "/models/registryEntry"); 

// tell the express framework that we will use EJS templates
app.set("view engine", "ejs");
// tell the express framework that the css is in the public directory
app.use(express.static(__dirname + "/public"));
require(__dirname + "/email/email");

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server is up n' runnin' for lil' Jon's registry");
});

