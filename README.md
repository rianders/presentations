# Presentations

Rick Anderson — Director of Emerging Technology
Office of University Online Education Services, Rutgers University

## View Presentations

https://rianders.github.io/presentations/

## Presentations

| Date | Title | Audience |
|------|-------|----------|
| Mar 6, 2026 | Beyond the Chatbot | UOES Emerging Technology |
| Feb 25, 2026 | Rutgers AI Policy Update | UOES EmTech |
| Dec 16, 2025 | AI, Emerging Technology, and Your Teaching | Rutgers Camden Faculty Senate |

## How It Works

Each presentation is a React JSX file loaded dynamically by `shell.html`.

**To add a new presentation:**
1. Create a folder: `YYYYMMDD-shortname/`
2. Add a JSX file (e.g., `my-presentation.jsx`) — use `const { useState, useEffect } = React;` (no ES module imports) and end with:
   ```js
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<Presentation />);
   ```
3. Add a link in `index.html` pointing to `shell.html?p=YYYYMMDD-shortname/my-presentation`
