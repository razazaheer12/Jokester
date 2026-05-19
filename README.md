<div align="center">

# 🎭 Jokester

### *Find your perfect joke. No bad days allowed.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%E2%96%B6%20Visit%20Site-FFE14D?style=for-the-badge&logo=vercel&logoColor=black)](https://jokester-omega.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-razazaheer12%2FJokester-181717?style=for-the-badge&logo=github)](https://github.com/razazaheer12/Jokester)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

<br/>

> A full-stack web application that lets users customise and discover jokes by category, format, and content filters — powered by the free [JokeAPI v2](https://v2.jokeapi.dev/). Built as a capstone project for the **Complete Web Development Bootcamp** by Angela Yu.

<br/>

![Jokester Banner](https://img.shields.io/badge/-%F0%9F%8E%AD%20Bright%20%7C%20Playful%20%7C%20Fun-FFE14D?style=for-the-badge)

</div>

<img width="944" height="433" alt="image" src="https://github.com/user-attachments/assets/9d3bf7de-fccf-4eb1-956a-5b43da4adbbe" />


---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🔴 Live Demo](#-live-demo)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ How It Works](#-how-it-works)
- [🚀 Getting Started](#-getting-started)
- [🌐 API Reference](#-api-reference)
- [🎨 Design Highlights](#-design-highlights)
- [🔒 Error Handling](#-error-handling)
- [📦 Deployment](#-deployment)
- [📚 Learning Objectives](#-learning-objectives)
- [🙌 Credits](#-credits)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎲 **7 Joke Categories** | Any, Programming, Miscellaneous, Dark, Pun, Spooky, Christmas |
| 📝 **Joke Formats** | One-liners or interactive Setup & Punchline |
| 🥁 **Tap-to-Reveal** | Two-part jokes hide the punchline until the user is ready |
| 🛡️ **Content Filters** | Blacklist unwanted themes: NSFW, Religious, Political, Racist, Sexist, Explicit |
| 😅 **Graceful Errors** | Friendly messages when the API is down or no jokes match |
| 📱 **Fully Responsive** | Works beautifully on mobile, tablet, and desktop |
| ⚡ **Zero Auth Required** | No API keys needed — works out of the box |
| 🌍 **Live on Vercel** | Deployed and accessible anywhere in the world |

---

## 🔴 Live Demo

> 🌐 **[https://jokester-omega.vercel.app/](https://jokester-omega.vercel.app/)**

Open the link, pick your filters, hit the button — and get a joke instantly.

---

## 🛠️ Tech Stack

```
Frontend        → HTML5 · CSS3 · Vanilla JavaScript · EJS Templating
Backend         → Node.js · Express.js
HTTP Client     → Axios
API             → JokeAPI v2 (free, no auth, CORS-enabled)
Fonts           → Google Fonts (Fraunces + Nunito)
Hosting         → Vercel
```

### Why these choices?

- **Express.js** — minimal, fast server framework ideal for routing and middleware
- **Axios** — cleaner API than `fetch` for server-side HTTP requests, with built-in error handling
- **EJS** — simple templating that lets the server inject dynamic data directly into HTML
- **JokeAPI** — free, no API key needed, CORS-enabled, and returns structured JSON with rich filtering options

---

## 📁 Project Structure

```
jokester/
│
├── index.js                  ← Express server (routes, Axios calls, error handling)
│
├── views/
│   └── index.ejs             ← Main EJS template (all dynamic rendering)
│
├── public/
│   ├── css/
│   │   └── style.css         ← All styles (neo-brutalist design system)
│   └── js/
│       └── app.js            ← Client-side JS (punchline reveal, pill sync)
│
├── package.json              ← Dependencies and npm scripts
├── vercel.json               ← Vercel deployment configuration
└── README.md                 ← You are here
```

---

## ⚙️ How It Works

```
User fills form  →  POST /joke  →  Express builds API URL  →  Axios calls JokeAPI
                                                                      ↓
Browser renders  ←  EJS renders  ←  Express passes joke data  ←  Response received
```

### Step-by-step flow

1. **User visits** `GET /` — the home page renders with an empty state and the filter form.
2. **User configures** their joke preferences (category, format, blacklist flags) and submits.
3. **Express receives** the `POST /joke` request and reads `req.body`.
4. **The server constructs** a dynamic JokeAPI URL:
   ```
   https://v2.jokeapi.dev/joke/{category}?blacklistFlags={flags}&type={type}
   ```
5. **Axios sends** the GET request to JokeAPI and awaits the response.
6. **The data is passed** into the EJS template, which renders the joke differently based on type (`single` vs `twopart`).
7. **For two-part jokes**, a JavaScript button hides the punchline until the user taps to reveal it.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/razazaheer12/Jokester.git
cd Jokester
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
# With auto-reload (recommended)
npx nodemon index.js

# Or run once without nodemon
node index.js
```

### 4. Open in browser

```
http://localhost:3000
```

That's it — no `.env` file, no API keys, no additional setup required.

---

## 🌐 API Reference

This project uses **[JokeAPI v2](https://v2.jokeapi.dev/)** — completely free, no authentication required.

### Base URL

```
https://v2.jokeapi.dev/joke/{category}
```

### Parameters used

| Parameter | Type | Example | Description |
|---|---|---|---|
| `category` | path | `Programming` | Joke category (or `Any`) |
| `type` | query | `twopart` | `single` or `twopart` |
| `blacklistFlags` | query | `nsfw,explicit` | Comma-separated content flags to exclude |

### Example request

```
GET https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&type=twopart
```

### Example response (two-part)

```json
{
  "error": false,
  "category": "Programming",
  "type": "twopart",
  "setup": "Why did the programmer quit his job?",
  "delivery": "Because he didn't get arrays.",
  "flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
  },
  "id": 210,
  "safe": true,
  "lang": "en"
}
```

### Available categories

`Any` · `Programming` · `Misc` · `Dark` · `Pun` · `Spooky` · `Christmas`

### Available blacklist flags

`nsfw` · `religious` · `political` · `racist` · `sexist` · `explicit`

---

## 🎨 Design Highlights

The UI uses a **neo-brutalist** design language with a bright, playful twist:

- **Typography** — `Fraunces` (serif, italic) for jokes; `Nunito` (rounded sans-serif) for UI
- **Color palette** — Sunshine yellow `#FFE14D`, coral `#FF6B6B`, mint `#4ECDC4`, and navy `#1A1A2E`
- **Cards** — thick `2.5px` borders + hard `6px` offset box shadows for that chunky, tactile feel
- **Animated blobs** — blurred color blobs float in the background using CSS `@keyframes`
- **Interactive pills** — category and filter buttons toggle with smooth hover + active states
- **Reveal animation** — the joke card pops in with a spring cubic-bezier animation on each new result
- **Mobile-first** — layout adapts gracefully from 320px screens upward

---

## 🔒 Error Handling

Errors are handled at two levels:

### Server-side (in `index.js`)
```js
try {
  const response = await axios.get(url);
  const data = response.data;

  if (data.error) {
    // JokeAPI returned no results for these filters
    return res.render("index", { joke: null, error: "No jokes found...", query: req.body });
  }

  res.render("index", { joke: data, error: null, query: req.body });

} catch (err) {
  // Network failure or API down
  console.error("JokeAPI error:", err.message);
  res.render("index", { joke: null, error: "Couldn't reach the Joke API right now.", query: req.body });
}
```

### Client-side (in `index.ejs`)

```html
<% if (error) { %>
  <div class="alert alert-error">
    <span class="alert-icon">😅</span>
    <p><%= error %></p>
  </div>
<% } %>
```

The form also **preserves user selections** after an error, so they don't have to re-configure their filters.

---

## 📦 Deployment

This project is deployed on **[Vercel](https://vercel.com/)** with a custom `vercel.json` configuration to support the Express server.

### `vercel.json`

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "index.js" }]
}
```

### Deploy your own copy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from your project root
vercel

# Follow the prompts — your site will be live in seconds
```

---

## 📚 Learning Objectives

This project was built to demonstrate:

| Skill | Implementation |
|---|---|
| **Express routing** | `GET /` and `POST /joke` endpoints in `index.js` |
| **Axios HTTP client** | Server-side API calls with async/await and try/catch |
| **EJS templating** | Dynamic rendering of joke data, error states, and form state preservation |
| **API integration** | Consuming a public REST API with query parameter construction |
| **Error handling** | Both API-level (`data.error`) and network-level (`catch`) errors handled gracefully |
| **Static file serving** | `express.static("public")` for CSS and JS |
| **Form handling** | `express.urlencoded` middleware + `req.body` parsing |
| **Deployment** | Vercel serverless deployment with `vercel.json` config |
| **Code organisation** | Structured directory layout with separation of concerns |

---

## 🙌 Credits

| Resource | Link |
|---|---|
| Course | [The Complete Web Development Bootcamp – Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/) |
| API | [JokeAPI v2 by sv443](https://v2.jokeapi.dev/) |
| Fonts | [Google Fonts – Fraunces & Nunito](https://fonts.google.com/) |
| Hosting | [Vercel](https://vercel.com/) |

---

<div align="center">

Made with 😂 and ☕ by **[razazaheer12](https://github.com/razazaheer12)**

*If this project made you laugh even once — it did its job.*

⭐ Star the repo if you enjoyed it!

</div>
