const express = require("express");
const {
  getAllPosts,
  createNewPost,
  getPostById,
  delPostById,
  updatePostById,
} = require("./controller");

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createNewPost);
router.get("/:id", getPostById);
router.patch("/:id", updatePostById);
router.delete("/:id", delPostById);

module.exports = router;
