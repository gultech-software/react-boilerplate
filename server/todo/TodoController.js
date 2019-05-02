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
        item.active = true;
        todos.push(item);
        res.send(todos);
    },
    deleteItem: (req, res) => {
        const { id } = req.params;
        todos[id].actie = false;
        res.send(todos);
    },
};
