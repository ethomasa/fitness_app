const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`);
});