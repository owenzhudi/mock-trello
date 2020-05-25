// mongodb config

const mongoose = require('mongoose');
const { USER_NAME, PASSWORD } = require('./user'); 

const db = mongoose.connection;

function init() {
    mongoose.connect(`mongodb://${USER_NAME}:${PASSWORD}@ds143340.mlab.com:43340/mock-trello`);
}
db.once('open', function() {
    console.log('mongodb connected.');
});

module.exports = init;
