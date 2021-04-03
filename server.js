const express = require("express");
require("./Config/dbConnect");

const app = express();

app.use(express.json());

app.use("/users", require("./router/userRouter"));

app.listen(4000, () => console.log("App up and running on port 4000"));
