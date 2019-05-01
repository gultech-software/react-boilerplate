const ResourceController = require('./resources/ResourceController');

module.exports = app => {
    app.get('/resource', ResourceController.get);
};
