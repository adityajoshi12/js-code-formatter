const app = require('express')();
let port = 4000
const router = require('./router/index');

app.use('/api', router);
app.listen(port, () => {
  console.log('Server started....');
});
