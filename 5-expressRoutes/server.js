const express = require("express");
const users = require("./routes/users"); // use that router as middleware
const app = express();

app.use(users);
// app.use("/users", users);

app.listen(3000);
