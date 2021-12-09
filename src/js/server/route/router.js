'use strict';
const { createUser, updateUser, removeUser, getUserById } = require("../controller/user.js")
const { Router } = require("express");
const router = Router();

router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', removeUser);
router.get('/user/:id', removeUser);

router.get('*', errorFoundPage);

router.use(serverError);

module.exports = router;
