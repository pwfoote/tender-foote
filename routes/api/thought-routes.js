const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router.route('/')
.get(getAllThoughts)
.post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:Id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  //POST && DELETE reaction
  router
  .route('/:ThoughtId/:reactionId')
  .post(addReaction);
  
  router
    .route('/:ThoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;