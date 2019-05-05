const moment = require('moment');

const todos = [];

module.exports = {
    getItems: (req, res) => {
        res.send(todos);
    },
    addItem: (req, res) => {
        const item = req.body;

        if (item.title === undefined) {
            res.status(400).send('body.title cant be undefined');
        }

        item.id = todos.length;
        item.done = false;
        item.createdAt = moment();
        item.updatedAt = undefined;
        todos.push(item);
        res.send(todos);
    },
    updateItem: (req, res) => {
        const item = req.body;

        if (item.title === undefined) {
            res.status(400).send('body.title cant be undefined');
        }

        todos[item.id] = item;
        item.updatedAt = moment();
        res.send(item);
    },
    deleteItem: (req, res) => {
        const { id } = req.params;
        todos[id].done = true;
        res.send(todos);
    },
};
