# Presentations

Rick Anderson — Director of Emerging Technology
Office of University Online Education Services, Rutgers University

## View Presentations

https://rianders.github.io/presentations/

## Presentations

### Upcoming — Teaching with GenAI Faculty Workshop Series 2026–27

| Date | Title | Audience | Status |
|------|-------|----------|--------|
| Aug 21, 2026 | Beyond the Chatbot | UOES / TIIP Partnership | **Draft** |
| Sep 18, 2026 | AI-Assisted Digital Accessibility Workflows | UOES / TIIP Partnership | Not started |
| Nov 6, 2026 | Beyond Alt Text: Notation & Diagrams with AI | UOES / TIIP Partnership | Not started |
| Jan 29, 2027 | The Prompting Cookbook: Context Engineering | UOES / TIIP Partnership | Not started |
| Feb 26, 2027 | Moving from Static to Dynamic Content | UOES / TIIP Partnership | Not started |
| Apr 9, 2027 | Rubric Design & AI-Assisted Feedback | UOES / TIIP Partnership | Not started |

### Past

| Date | Title | Audience |
|------|-------|----------|
| Apr 15, 2026 | From RC Cars to Robot Arms | Chameleon User Meeting |
| Apr 10, 2026 | Prompting Cookbook | Faculty Workshop |
| Mar 13, 2026 | Emerging Technology for XR | UOES Emerging Technology |
| Mar 6, 2026 | Beyond ChatGPT | UOES Emerging Technology |
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
