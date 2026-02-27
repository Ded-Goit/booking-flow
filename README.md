# Booking Flow Test Task

## Overview

This project is a multi-step booking flow built with:

- React 19
- TypeScript
- TailwindCSS v4
- Vite

The implementation follows clean architecture principles and focuses on reusable UI components and scalable state management.

---

# 🌍 Live Demo

## https://booking-app-demo.vercel.app

---

# ✨ Features

📆 Interactive calendar
🕒 Time slot selection
🌍 Timezone support
👥 Add guests
📝 Booking form with validation
✅ Confirmation screen
🎉 Success screen
♻️ Reusable UI components
🧠 Optimized rendering (memoization)
📦 Clean scalable architecture

---

# 🏗 Architecture Overview

src/
│
├── components/
│ ├── booking/ # Booking flow (feature-based)
│ ├── calendar/ # Calendar feature
│ ├── ui/ # Reusable UI components
│ └── icons/ # SVG icon components
│
├── constants/ # Static configuration
├── types/ # TypeScript models
├── utils/ # Pure utility logic
│
├── App.tsx
└── main.tsx

## Booking flow works as a controlled state pipeline:

Calendar Selection
↓
Selected Date (App State)
↓
Time Selection
↓
Selected Time (App State)
↓
Details Form
↓
Validation (utils/validation.ts)
↓
Confirmation
↓
Success Screen
Key Principles:

🔹 State is lifted to the highest necessary level
🔹 Derived values use useMemo
🔹 Handlers are memoized with useCallback
🔹 Pure validation logic is extracted to utils

# ⚡ Performance Notes

## 1️⃣ Memoization

useMemo used for:
Derived meeting time
Form validation state
useCallback prevents unnecessary re-renders

## 2️⃣ Pure Utility Functions

All validation and date logic lives in:
src/utils/
This:
Keeps components clean
Makes logic testable
Avoids re-creation of logic per render

## 3️⃣ Component Isolation

Each feature:
Has its own folder
Does not depend on unrelated features
Imports only required utilities
This prevents:
Unnecessary re-renders
Tight coupling
Spaghetti imports

# 🧠 Why This Structure?

## ✅ Feature-based grouping

Instead of grouping by type (components, hooks, helpers),
this project groups by feature domain:
booking/
calendar/
Why?
Because in real production apps:
Features grow
Teams scale
Responsibilities divide by domain

## ✅ Scalable

You can easily add:
authentication/
notifications/
api/
without breaking structure.

## ✅ Testable

Logic is extracted to:
utils/
Which allows:
Unit testing
Easier refactoring
Predictable behavior

## ✅ Clean Separation of Concerns

Layer Responsibility
UI Rendering
Booking User interaction
Calendar Date logic
Utils Pure functions
Types Data contracts

## Validation

All form validation is centralized in:
src/utils/validation.ts
Includes:
Email validation
Required fields
Length constraints
Safe trimming
This prevents:
Business logic inside components
Repeated validation code

---

# 🛠 Getting Started

Install dependencies

```bash
npm install
```

Run dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

# 📈 Future Improvements

API integration
Server-side validation
Authentication
Google Calendar integration
Unit & E2E tests
Accessibility audit
Dark mode
Animations

# 🧑‍💻 Author DED

Frontend architecture-focused booking system built with performance and scalability in mind.

- Single centralized state in `App.tsx`
- Step-based rendering (no router)
- Separation between layout and business logic
- Tailwind design tokens via CSS variables
- Reusable UI layer

---
