const users = [{name: 'john'}, {name: 'chiris'}];

const getUsers = (req, res) => {
    return res.json(users);
}

module.exports = {getUsers}