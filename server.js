const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
const header_middleware = require("./middleware/header");

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false }));
app.use(header_middleware);
const directory = path.join(__dirname, "./images");
app.use("/images", express.static(directory));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/blogPosts", require("./routes/api/blogPost"));
app.use("/api/profile", require("./routes/api/profile"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server connected to ${PORT}`));
