import express from "express";
import axios from "axios";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: null});
});

app.post("/joke", async (req, res) => {  
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
    console.log(result.data); // Should log the joke object
    res.render("index.ejs", { content: result.data });
  } catch (error) {
    console.error("Error fetching joke:", error.message);
    res.render("index.ejs", { content: "An error occurred. Please try again later." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
