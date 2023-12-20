const express = require("express");
const router = express.Router();

const {createBlog,getAllBlogs,getBlogById,updateBlog} = require("../controllers/blogController");

router.route("/create").post(createBlog);
router.route("/getallblogs").get(getAllBlogs);
router.route("/singleblog/:id").get(getBlogById)
router.route("/update/:id").put(updateBlog)

module.exports =router;
