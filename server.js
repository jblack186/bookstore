const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
const PORT = process.env.PORT || 5000;
const pool = require("./db");
var compression = require("compression");


//middleware
app.use(compression());
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "store/build")))
}

//routes

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use("/choices", require("./routes/choices"));

app.use("/auth", require("./routes/jwtAuth"));


app.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");

    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// if user goes somewhere other than a predefined route then this will take them back to the homepage
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "store/build/index.html")); 
})

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
