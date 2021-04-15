const models = require("../../models/index")

const getUsers = (req, res) => {

    models.User.findAll({
        order: [['id', 'asc']]
    }).then(users => {
        return res.json(users);
    }).catch(err => {
        return res.status(400).send(err.message);
    });
}

module.exports = {getUsers}