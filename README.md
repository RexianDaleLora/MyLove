# 💚 Our Little World — Website

A romantic website made with love.

---

## 📁 Folder Structure

```
your-repo/                        ← root of your GitHub repo
├── index.html                    ← Home page (day counter)
└── tab/
    ├── letter.html               ← Letters page
    ├── quotes.html               ← Quotes page
    └── letters/
        ├── letter1/              ← 1st Month (February 10, 2026)
        │   └── letter.pdf        ← PUT YOUR PDF HERE
        └── letter2/              ← 2nd Month (March 10, 2026)
            └── letter.pdf        ← PUT YOUR PDF HERE
```

> ✅ When you add more letters later, just create a new folder (e.g. `letter3/`) and drop your PDF inside.

---

## ✏️ How to Add a PDF to a Letter

1. Write your letter in Word, Google Docs, Notes — anything you like
2. **Export / Save As PDF**
3. **Rename the file to exactly:** `letter.pdf`
4. Put it inside the matching folder, for example:
   - 1st Month letter → `tab/letters/letter1/letter.pdf`
   - 2nd Month letter → `tab/letters/letter2/letter.pdf`
5. **Push to GitHub** — the website will load it automatically 💚

Each A4 page in your PDF becomes one page in the letter reader.

---

## ➕ How to Add a New Letter

1. Create a new folder inside `tab/letters/`, e.g. `letter3/`
2. Add your PDF as `letter.pdf` inside it
3. Open `tab/letter.html` and:
   - **Copy** one of the `<div class="env-card">` blocks
   - **Change** `letter2` → `letter3` in `data-id` and `onclick`
   - Update the title, date, and emoji seal
4. In the `<script>` section, copy one of the `letter2: { ... }` entries and update it for `letter3`
5. Push to GitHub ✅

---

## 🚀 How to Deploy on GitHub Pages

1. Push your repo to GitHub
2. Go to your repo → **Settings** → **Pages**
3. Under *Source*, set: `Deploy from a branch` → branch: `main` → folder: `/ (root)`
4. Click **Save**
5. Your site will be live at:
   ```
   https://yourusername.github.io/your-repo-name
   ```

---

## 🗂️ Quick Reference — Which file does what

| File | What it is |
|------|-----------|
| `index.html` | Home page with the day counter |
| `tab/letter.html` | Letters page with envelopes |
| `tab/quotes.html` | Quotes page |
| `tab/letters/letter1/letter.pdf` | PDF for the 1st Month letter |
| `tab/letters/letter2/letter.pdf` | PDF for the 2nd Month letter |

---

*Made with love 🌿*
