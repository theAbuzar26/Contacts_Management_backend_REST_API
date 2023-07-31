
//steps below will create express server
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");


connectDb();
const app = express();

const port = process.env.PORT || 2600;

//for thunder client
// app.get("/api/contacts", (req,res) =>{
//     res.send("Get All Contacts bro :/");
// });

// app.use is used whn we use middlewares
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});


/*
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
