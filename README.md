# Light / Dark Mode Portfolio

A single-page portfolio website with a toggleable light and dark theme. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

## Features

- **Theme toggle** — Switch between light and dark mode with a fixed toggle in the top-right corner
- **Persistent preference** — Selected theme is saved to `localStorage` and restored on reload
- **CSS custom properties** — Colors, backgrounds, and accents update through a `data-theme` attribute on the root element
- **Dynamic illustrations** — About-section SVGs swap between light and dark variants when the theme changes
- **Responsive layout** — About section stacks vertically on smaller screens

## Getting Started

No installation or build step is needed. Clone the repository and open `index.html` in a browser:

```bash
git clone <repository-url>
cd light-dark-mode
```

Then open `index.html` locally, or serve the folder with any static file server:

```bash
npx serve .
```

## Project Structure

```
light-dark-mode/
├── index.html      # Page markup and sections
├── style.css       # Theme variables, layout, and component styles
├── script.js       # Theme toggle logic and persistence
├── favicon.png
├── img/            # Undraw illustrations (light + dark variants)
│   ├── undraw_proud_coder_light.svg
│   ├── undraw_proud_coder_dark.svg
│   ├── undraw_feeling_proud_light.svg
│   ├── undraw_feeling_proud_dark.svg
│   ├── undraw_conceptual_idea_light.svg
│   └── undraw_conceptual_idea_dark.svg
└── README.md
```

## How It Works

### CSS theming

Light mode defaults are defined on `:root`. Dark mode overrides live under `[data-theme="dark"]`:

```css
:root {
  --primary-color: rgb(255, 92, 92);
  --background: rgb(255, 255, 255);
  /* ... */
}

[data-theme="dark"] {
  --primary-color: rgb(150, 65, 255);
  --background: #121212;
  /* ... */
}
```

### JavaScript

`script.js` handles the toggle:

1. Sets `data-theme="light"` or `data-theme="dark"` on `<html>`
2. Saves the choice to `localStorage` under the key `theme`
3. Updates the toggle label, sun/moon icon, and illustration `src` paths
4. On page load, applies the saved theme if one exists

## Sections

| Section   | Description                                      |
| --------- | ------------------------------------------------ |
| **Home**  | Hero title and welcome message                   |
| **About** | Three illustration cards with theme-aware SVGs   |
| **Project** | Styled button variants and a sample text box |
| **Contact** | Social media icon links                      |

## Technologies

- HTML5
- CSS3 (custom properties, flexbox, media queries)
- Vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) — Comfortaa, Kaushan Script, Oswald
- [Font Awesome 7](https://fontawesome.com/) — icons
- [unDraw](https://undraw.co/) — open-source illustrations

## License

This project is open source. Illustrations are from [unDraw](https://undraw.co/) under their license terms.
