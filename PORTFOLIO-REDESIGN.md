# Portfolio Redesign — Ink & Paper Design System

Use this document to guide the redesign of your portfolio codebase. It contains the exact Tailwind v4 settings, CSS tokens, and component guidelines to match the StoreLink aesthetic.

---

## 1. Main CSS Configuration (Tailwind CSS v4)
Extend the `@theme` directive in your main CSS entry point (usually `src/index.css` or `src/App.css`):

```css
@import "tailwindcss";

@theme {
  /* Color Palette */
  --color-paper: #FAFAF8; /* Warm off-white background */
  --color-ink: #0B0B0B;   /* Near-black text/borders */

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking-tightest: -0.04em;

  /* Custom Opacities for Hairline Styling */
  --alpha-12: 0.12;
  --alpha-15: 0.15;
  --alpha-35: 0.35;
  --alpha-45: 0.45;
  --alpha-55: 0.55;
  --alpha-65: 0.65;

  /* Keyframe Animations */
  --animate-fade-in: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

---

## 2. Core Styling Guidelines

### 🎨 Background & Text
- Top-level container background: `bg-paper`
- Top-level container text color: `text-ink`
- Use opacity levels for hierarchy (e.g., `text-ink/70` for descriptions, `text-ink/45` for tags/labels).

### 🖋️ Typography
- **UI & Headings**: Crisp Inter (`font-sans`).
- **Main Hero/Titles**: Heavy bold with tight letter-spacing (`font-sans font-bold tracking-tightest`).
- **Labels, Dates, Stats, Tech Tags**: Monospaced small text (`font-mono text-xs uppercase tracking-wider text-ink/45`).

### 📐 Borders (The Detailed Stripes)
- Avoid colored dividers or heavy shadow boxes.
- Separate sections, headers, footers, and grids using thin `1px` lines:
  - `border-ink/12` (12% opacity)
  - `border-ink/15` (15% opacity)

### 📦 Components

#### Cards (Project Showcase)
- Square edges (`rounded-none`) and transparent background.
- Simple 1px hairline border:
  ```html
  <div class="border border-ink/12 bg-transparent p-6 rounded-none">
    <!-- Card content -->
  </div>
  ```

#### Buttons
- **Primary Button** (Solid Black, inverts to white border on hover):
  `bg-ink text-paper border border-transparent px-4 py-2 rounded-none transition-colors hover:bg-paper hover:text-ink hover:border-ink`
- **Ghost/Secondary Button** (Hairline outline, slight background tint on hover):
  `border border-ink/15 text-ink/70 bg-transparent px-4 py-2 rounded-none transition-colors hover:bg-ink/[0.04]`

---

## 3. UI Implementation checklist
- [ ] Add the Google Fonts for **Inter** and **IBM Plex Mono** to `index.html`.
- [ ] Update the global stylesheet with the `@theme` variables above.
- [ ] Apply `bg-paper text-ink min-h-screen font-sans` to the root container.
- [ ] Redesign header/navbar: keep it simple, bordered at the bottom (`border-b border-ink/12`), using `font-mono` menu links.
- [ ] Replace any card component shadows and rounded borders with sharp `rounded-none` and `border-ink/12`.
- [ ] Change all custom buttons to match the primary/ghost classes.
