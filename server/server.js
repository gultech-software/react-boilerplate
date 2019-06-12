const app = require('express')();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.json());

const Logger = (req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(req.method, req.url);
    next();
};
app.use(Logger);

routes(app);

app.listen(8080, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 8080');
});
