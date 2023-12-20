const express = require("express");
const mongoose = require("mongoose");

const PORT = 8888;
const app = express();

app.use(express.json());

mongoose.set("strictQuery", false);
const db =
  "mongodb+srv://dreamypd73:bhimpd28913@cluster0.bldcxmp.mongodb.net/Blog?retryWrites=true&w=majority";

mongoose.connect(db).then(() => {
  console.log("mongoose connected...");
  app.listen(PORT, () => {
    console.log(`server is running at port no. ${PORT}.`);
  });
})
.catch((error) => {
    console.log(error);
  });

  const blogRoutes = require("./routers/blogRouter");
  app.use("/blogs",blogRoutes);

  const pairRoutes = require("./routers/pairRouter");
  app.use('/sum', pairRoutes);