require('dotenv').config();
const app = require('./app');

app.listen(app.get('port'), (err) => {
  if (err) {
    console.error('There\'s been an error starting the server');
    process.exit(1);
  }
  console.log(`Server provisioned on http://localhost:${app.get('port')}`);
});