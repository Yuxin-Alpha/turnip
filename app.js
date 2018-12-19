const express = require("express");
const exphbs  = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const port = 8888;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get("/", (req, res) => {
  const title = "test string"
  res.render("index", {
    title: title
  });
})

app.get("/about", (req, res) => {
  res.render("about");
})

app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
})

app.post("/ideas", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send('ok');
})

app.listen(port, () => {
  console.log(`server is running on ${port}`);
})