const Post = require("./model");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

exports.createNewPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = await Post.create({
      title: title,
      body: body,
    });
    res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json({
      data: post,
    });
  } catch (err) {
    next(err);
  }
};

exports.delPostById = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({
      message: "Post Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.updatePostById = async (req, res) => {
  const id = req.params.id;
  const { title, body, tags } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, body, tags },
      { new: true }
    );
    res.status(200).json({
      message: "Post Updated Successfully",
      data: updatedPost,
    });
  } catch (err) {
    next(err);
  }
};
