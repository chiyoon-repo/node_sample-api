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

const createUsers = (req, res) => {
    const name = req.body.name;

    models.User.create({name: name})
        .then(user => {
            return res.status(201).json(user);
        })
        .catch(err => {
            console.log(err.message);
            if (err.name === "SequelizeUniqueConstraintError") {
                return res.status(409).end();
            }
            return res.status(500).end();
        });
}

module.exports = {getUsers, createUsers}