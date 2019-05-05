const app = require('express')();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.json());

const Logger = (req, res, next) => {
	console.log(req.method, req.url);
	next();
}
app.use(Logger);

routes(app);

app.listen(1337, () => {
	console.log('Server is running on port 1337');
});
