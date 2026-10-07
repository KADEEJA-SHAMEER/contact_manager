require("dotenv").config();
const express = require("express");
const connectdb=require("./config/dbConnection")
const errorHandler=require("./middleware/errorHandler")


connectdb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts",require("./routes/contact_routes"))
app.use("/api/users",require("./routes/user_routes.js"))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on ${port}`);
});
