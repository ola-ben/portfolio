# Portfolio Redesign Roadmap — Future Additions

This document outlines the remaining features proposed to make your portfolio stand out, along with their design specs under the **Ink & Paper** design system. Use this as a reference to resume the implementation in your next session.

---

## 1. The "Now" / "Live" Status Tag

### 💡 Concept
A dynamic, minimal monospaced widget in the header or the top of the Hero section that shows you are currently active, tracking:
- Current active engineering focus (e.g., "Refactoring database indexes on Ajani")
- Local time in Ibadan, Nigeria (pulsing dot)
- What you are currently studying or reading

### 🎨 Ink & Paper Style Spec
- Plain borders (`border border-ink/12`), `bg-transparent`, `font-mono text-xs uppercase tracking-wider text-ink/70`.
- Pulsing active dot: `animate-pulse bg-emerald-500` or `bg-ink`.

### 📋 Implementation Steps
1. Create a `src/components/StatusTag.jsx` component.
2. Add a simple dynamic clock function using React state (`setInterval`) for Ibadan's local time (GMT+1).
3. Embed the tag inside `src/components/Hero.jsx` just below the "Open to junior/mid roles" badge.

---

## 2. The "Weekly Ship Log" (Changelog)

### 💡 Concept
A chronological ledger displaying weekly features you've shipped. It serves as concrete proof of your productivity and cadence.

### 🎨 Ink & Paper Style Spec
- Vertical timeline using thin lines (`border-l border-ink/12`) and monospaced text.
- Clean nested hierarchy:
```
2026-06-25 — Ajani
└ Shipped AI-powered price intelligence agent
```

### 📋 Implementation Steps
1. Create a data file `src/data/shiplog.js` with structured entries:
   ```javascript
   export const shiplogs = [
     { date: '2026-06-25', project: 'Ajani', task: 'Shipped regional AI price matching agent' }
   ]
   ```
2. Create a `src/components/ShipLog.jsx` component.
3. Add a section header and map through `shiplogs`, rendering them in a timeline layout.
4. Add the section to `src/App.jsx` (e.g., between Projects and Experience).

---

## 3. Keyboard-Driven Command Palette (`Cmd + K` / `Ctrl + K`)

### 💡 Concept
A developers-first shortcut overlay. Pressing `Cmd+K` or `Ctrl+K` toggles a popup where visitors can navigate to sections, swap themes, or download your CV with keyboard inputs.

### 🎨 Ink & Paper Style Spec
- Fixed fullscreen overlay (`fixed inset-0 bg-ink/35 backdrop-blur-xs`).
- Centered terminal console box (`bg-paper border border-ink/12 max-w-md w-full rounded-none p-4`).
- Options styled as plain menu list rows with mouse hover highlights (`hover:bg-ink/[0.04]`).

### 📋 Implementation Steps
1. Create `src/components/CommandPalette.jsx`.
2. Set up global event listeners on window keydowns:
   ```javascript
   useEffect(() => {
     const handleKeyDown = (e) => {
       if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
         e.preventDefault();
         setOpen(v => !v);
       }
     }
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, []);
   ```
3. Use Framer Motion's `AnimatePresence` to animate the modal mounting/unmounting.
4. Implement navigation binds matching your routes/hashes (e.g., scroll to `#projects`, toggle theme, open CV download link).
5. Add the `<CommandPalette />` component near the top level of `src/App.jsx`.
