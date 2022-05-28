const app = require('express')();
const port = 4000;
const router = require('./router/index');

app.use('/api', router);
app.listen(port, () => {
  console.log('Server started....');
});
