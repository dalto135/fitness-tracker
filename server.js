const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//mongodb+srv://dalto135:biscuitbill@cluster0.kl0bn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// routes
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
