const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5010;
const toDoRouter = require('./routes/toDo.router')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/toDO', toDoRouter)
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
const { DateTime } = require("luxon");