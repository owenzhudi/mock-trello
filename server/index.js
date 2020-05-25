'use strict';

const app = require('./app');

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});

module.exports = server;
