const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
const PORT = process.env.PORT || 5000;




//middleware

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "store/build")))
}

//routes

app.use("/authentication", require("./routes/storeAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

//if user goes somewhere other than a predefined route then this will take them back to the homepage
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "store/build/index.html")); 
})