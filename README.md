# Kartik Matade — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS**, featuring a
typing-terminal hero, scroll-triggered reveal animations, a scroll progress bar,
and content that's driven from one editable data file so it's easy to keep growing.

---

## 🚀 Run it in VS Code (step by step)

1. **Unzip** this project and open the folder (`portfolio`) in VS Code:
   `File → Open Folder…` → select the `portfolio` folder.

2. **Open a terminal in VS Code**: `Terminal → New Terminal`.

3. **Install Node.js** if you don't already have it (v18 or newer):
   https://nodejs.org — download the LTS version, install it, then restart VS Code.
   Check it worked by running:
   ```bash
   node -v
   npm -v
   ```

4. **Install project dependencies** (run this once, inside the terminal, in the
   `portfolio` folder):
   ```bash
   npm install
   ```

5. **Start the dev server**:
   ```bash
   npm run dev
   ```
   VS Code will print a local URL, usually `http://localhost:5173`. Ctrl-click it
   (or paste it into your browser) to see the site live. It hot-reloads as you edit.

6. **When you're happy with it, build the production version**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with the final static site, ready to deploy
   anywhere (Vercel, Netlify, GitHub Pages, Render static site, etc.).

7. **Optional — preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🧩 Project structure

```
portfolio/
├── index.html
├── src/
│   ├── assets/              → your images (profile photo, certificate images)
│   ├── data/
│   │   └── portfolioData.js → ⭐ EDIT THIS to update almost everything
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── icons.jsx        → skill "sticker" icon registry
│   │   ├── ProjectLogo.jsx  → SVG logo marks for projects
│   │   ├── Reveal.jsx       → scroll-reveal animation wrapper
│   │   └── ScrollProgress.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js       → colors, fonts, animation tokens
└── package.json
```

---

## ➕ How to add things later (no restructuring needed)

### Add a new skill
Open `src/data/portfolioData.js`, find the `skills` array, and add:
```js
{ name: "Docker", icon: "docker", category: "DevOps", level: 65 },
```
If the icon key doesn't exist yet, open `src/components/icons.jsx`, import an
icon from `react-icons` or `lucide-react`, and add it to `iconMap`. A brand-new
`category` name (like `"DevOps"` above) automatically creates a new section —
nothing else to configure.

### Add a new certification
1. Drop the certificate image in `src/assets/`.
2. In `src/components/Certifications.jsx`, import it and add it to `imageRegistry`.
3. In `portfolioData.js`, add a new object to the `certifications` array with the
   matching `imageKey`.

### Add a new project
Copy the commented example at the bottom of the `projects` array in
`portfolioData.js` and fill in the details. If you want a custom logo mark
instead of the default, add a new SVG component in `ProjectLogo.jsx`.

### Change colors / fonts
Everything lives in `tailwind.config.js` under `theme.extend.colors` and
`theme.extend.fontFamily` — update once, and it applies everywhere.

---

## 🛠 Tech used

- **React 18** + **Vite** — fast dev server & build
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — scroll-triggered reveals, hero motion, progress bar
- **lucide-react** + **react-icons** — skill & UI icons
- No database, no backend — fully static, deploy anywhere.

---

## 📦 Deploying

Any static host works since `npm run build` outputs plain HTML/CSS/JS in `dist/`:
- **Vercel / Netlify**: connect your GitHub repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages**: build locally, then push the contents of `dist/` to a
  `gh-pages` branch (or use the `gh-pages` npm package).
