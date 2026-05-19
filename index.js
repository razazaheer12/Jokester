import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// Middleware: serve static files and parse form data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// ─── GET / ───────────────────────────────────────────────────────────────────
// Render the home page with no joke yet
app.get("/", (req, res) => {
  res.render("index", { joke: null, error: null, query: {} });
});

// ─── POST /joke ───────────────────────────────────────────────────────────────
// Fetch a joke from the JokeAPI based on user preferences
app.post("/joke", async (req, res) => {
  const { category, jokeType, blacklistFlags } = req.body;

  // Build the API URL dynamically from user input
  const selectedCategory = category || "Any";
  const selectedType     = jokeType   || "any";

  // Flags to exclude (safe browsing options the user ticked)
  const flags = Array.isArray(blacklistFlags)
    ? blacklistFlags.join(",")
    : blacklistFlags || "";

  // Construct query string for blacklist
  const flagParam = flags ? `?blacklistFlags=${flags}` : "";

  // Choose endpoint based on joke type preference
  const typeParam = selectedType !== "any"
    ? `${flagParam ? "&" : "?"}type=${selectedType}`
    : "";

  const url = `https://v2.jokeapi.dev/joke/${selectedCategory}${flagParam}${typeParam}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // JokeAPI returns error:true when no jokes match the filters
    if (data.error) {
      return res.render("index", {
        joke: null,
        error: "No jokes found for those filters. Try loosening your options!",
        query: req.body,
      });
    }

    res.render("index", { joke: data, error: null, query: req.body });
  } catch (err) {
    // Log the error server-side and show a friendly message
    console.error("JokeAPI error:", err.message);
    res.render("index", {
      joke: null,
      error: "Couldn't reach the Joke API right now. Try again in a moment!",
      query: req.body,
    });
  }
});

// ─── Start server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🎭 Jokester running at http://localhost:${PORT}`);
});