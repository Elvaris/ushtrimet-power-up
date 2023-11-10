const router = require('express').Router();
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getUserByName,
    logIn,
    deleteUserById,
} = require('../controllers/users');


const{validateData}=require('../middlewares/validateData')
const verifyToken =require('../middlewares/verifyToken')


router.post('/login', logIn)
router.get('/search',verifyToken,getUserByName);
router.get('/:id',verifyToken, getUser);
router.get('/',verifyToken, getUsers);
router.post('/',verifyToken,validateData(['name,email,password']), createUser);
router.put('/:id',verifyToken, updateUser);
router.delete('/',verifyToken, deleteUser);
router.delete('/deleteUserById/:id',verifyToken, deleteUserById);


module.exports = router;