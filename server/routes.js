const express = require('express');
const path = require('path');

const TodoController = require('./todo/TodoController');

module.exports = app => {
    app.use('/', express.static(path.join(__dirname, '../dist/')));

    app.get('/api/todo', TodoController.getItems);
    app.post('/api/todo', TodoController.addItem);
    app.put('/api/todo', TodoController.updateItem);
    app.delete('/api/todo/:id', TodoController.deleteItem);
};
