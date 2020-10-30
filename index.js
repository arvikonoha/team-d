const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/signin", require("./routes/api/signin"));

app.use("/", (req, res) => {
  res.send("404 not found");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}`));
