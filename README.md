# Booking Flow Test Task

## Overview

This project is a multi-step booking flow built with:

- React 19
- TypeScript
- TailwindCSS v4
- Vite

The implementation follows clean architecture principles and focuses on reusable UI components and scalable state management.

---

## Features

- Multi-step booking flow
- Real calendar month generation
- Time selection
- Form validation
- Progress indicator
- Responsive layout
- Dark UI based on provided Figma design

---

## Architecture

src/
├ components/
│ ├ ui/ # Reusable UI components
│ ├ booking/ # Business logic components
│
├ layout/ # Layout wrappers
├ types/ # TypeScript types
├ utils/ # Utility helpers

### Key decisions:

- Single centralized state in `App.tsx`
- Step-based rendering (no router)
- Separation between layout and business logic
- Tailwind design tokens via CSS variables
- Reusable UI layer

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Possible Improvements

Animated step transitions

Email regex validation

Timezone dropdown functionality

Accessibility improvements (ARIA)

Unit tests

Author

Test task implementation.
