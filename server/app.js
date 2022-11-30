if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const port = process.env.PORT || 3000
const cors = require('cors')
const express = require('express');
const app = express();
const Router = require('./routers');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/',Router)



app.listen(port, () => {
    console.log(`Server started`,port);
});