let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');


const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const combatantRoutes = require('./routes/combatant.routes');
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 4000;

app.use('/combatant', combatantRoutes);

var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
