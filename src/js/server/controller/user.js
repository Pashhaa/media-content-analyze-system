'use strict';
const { createUsr, getUsr, updateUsr, deleteUsr } = require('./helpers/helpUser.js');

async function createUser(req, res) {
    try {
        const user = await createUsr(req.body)
        return res.status(200).json(`User successfully created: ${user}`);
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function getUserById(req, res) {
    try {
        const user = await getUsr(req.params.id);
        return res.status(200).json(`User: ${user}`);
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function removeUser(req, res) {
    try {
        await deleteUsr(req.params.id);
        return res.status(204).json('Success Code: "204 No Content"');
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function updateUser(req, res) {
    try {
        const user = await updateUsr(req.params.id, req.body);
        return res.status(200).json('Success Code: 200 OK');
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}



module.exports = { createUser, getUserById, removeUser, updateUser };
