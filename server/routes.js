const TodoController = require('./todo/TodoController');

module.exports = app => {
    app.get('/api/todo', TodoController.getItems);
    app.post('/api/todo', TodoController.addItem);
    app.delete('/api/todo/:id', TodoController.deleteItem);
};
