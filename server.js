require('dotenv').config();
const express = require('express');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(router);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(PORT, ()=> {
    console.log(`server is runing on port  ${PORT}`);
});
