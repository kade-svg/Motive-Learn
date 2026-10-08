# Motive Learn

**Build a little knowledge every day.** Motive Learn is a responsive, local-first learning app in the Motive Labs style. It includes short quiz lessons, learning paths, points, daily streaks, daily challenges, unlockable skills, achievements, progress tracking, dark mode, import/export, and optional offline caching.

## Run it

- Open `index.html` directly in a modern browser for the core app.
- For installable PWA/offline support, serve this folder over HTTPS or localhost. For example, from this folder run `python3 -m http.server 8080`, then visit `http://localhost:8080`.
- To publish to GitHub Pages, upload the contents of this folder to a repository and enable Pages for the branch/folder containing `index.html`.

## Progress and privacy

The app does not require a sign-in or backend. Progress is stored in browser `localStorage` on the current device. It does not automatically synchronise between devices. Use **Settings → Export my progress** to create a JSON backup, then **Import backup** on another device/browser.

## Included learning tracks

Spanish, French, Japanese, Mathematics, Grammar & Writing, Science, Geography, History, Coding, Logic & Reasoning, and Money Basics. Every path has three lessons with explanations after each answer.

## Points and progression

- Correct answers normally earn 10 points; incorrect answers earn 1.
- Replaying a completed lesson earns fewer answer points.
- Completing a lesson each day grants a daily bonus and updates the streak.
- Daily missions and a five-lesson weekly challenge add bonus points.
- Points can unlock levels early or be spent on skill boosts.

This is a front-end prototype and learning scaffold: progress is local to the browser until a backend and account-sync system are intentionally added.
