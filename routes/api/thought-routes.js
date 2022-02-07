const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router.route('/')
.get(getAllThoughts)
.post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// delete thought by id
// router.route("/:thoughtId");
module.exports = router;