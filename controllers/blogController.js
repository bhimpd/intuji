const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

//creating the blogs..
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (category && category.split(",").length > 1) {
      return res.status(400).json({ err: "Only one category is allowed..." });
    }

    const blog = await Blog.create({
      title,
      description,
      category,
    });

    if (!title || !description) {
      return res
        .status(400)
        .json({ err: "Title and description are required..." });
    }

    return res
      .status(200)
      .json({ message: "Blog created successfully", Blog: blog });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// getting all the blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res
      .status(200)
      .json({ message: "Getiing all Blogs...", Blog: blogs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//getting blog by id..
exports.getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);

    if (!id) {
      return res
        .status(404)
        .json({ message: `${id} no. BlogId donot exists...` });
    }
    return res.status(200).json({ message: "blog details", Blog: blog });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.updateBlog = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Check if id is not a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid BlogId format..." });
      }
  
      // Check if the blog exists
      const existingBlog = await Blog.findById(id);
  
      if (!existingBlog) {
        return res
          .status(404)
          .json({ message: `${id} no. BlogId does not exist...` });
      }
  
      // Check if category is provided and has only one value
      const { category } = req.body;
      if (category && category.split(",").length > 1) {
        return res.status(400).json({ err: "Only one category is allowed..." });
      }
  
      const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      return res
        .status(200)
        .json({ message: "Blog updated successfully", updatedBlog });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  