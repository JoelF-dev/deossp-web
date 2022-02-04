const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', process.env.PORT || 5000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

//Routes
app.use(require('./routes/index'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Port config
app.listen(app.get('port'), () => {
    console.log("Server activo en puerto", app.get('port'));
});