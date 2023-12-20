const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "title required"],
    },
    description: {
      type: "String",
      required: [true, "description required"],
    },
    category: {
      type: "String",
      required: [true, "categrory required"],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
