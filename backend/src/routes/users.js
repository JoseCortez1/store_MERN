const {Router} = require('express')
const  router = Router();

const {loginUser, createUser, getUsers, deleteUser} = require('../controllers/users.controllers')

router.route('/')
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .delete(deleteUser)
router.route('/login/')
    .post(loginUser)


module.exports = router;