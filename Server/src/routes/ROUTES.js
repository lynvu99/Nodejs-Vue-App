
const TodosRoute = require('./Todo');

function route(app) {
    app.use('/todos', TodosRoute)
}
module.exports = route