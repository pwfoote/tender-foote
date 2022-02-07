const router= require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
   // addFriend,
    //removeFriend,
  } = require("../../controllers/user-controller");

//GET all and POST at /api/user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

  // Set up GET one, PUT , && DELETE at /api/user/:id
  router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  module.exports = router;