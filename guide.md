Got it 🌟 You want a **developer task doc (Markdown)** that says:

* Build a **navigation bar**
* Create all the **routes/pages** we discussed
* Use **dummy data/skeletons** for now
* Forms → **Formik + Yup**
* Global state → **Zustand** (instead of TanStack Query)

Here’s the `.md` file:

---

# 📌 Frontend Setup Plan — Mood-based Recommender

## 🌈 General Guidance

* Use **MUI components** for all UI elements.
* Ensure a **responsive layout** for all screens, especially for mobile devices.
* Choose a **retro, peaceful theme** for colors and styling.

---

## 🧭 Navigation Component

* Build a top navigation bar with links:

    * Home (`/`)
    * Mood (`/mood`)
    * Recommendations (`/recommendations`)
    * Profile (`/profile`)
    * About (`/about`)
    * Auth (`/auth/login`, `/auth/signup`)

Use **MUI AppBar** + responsive drawer for mobile.

---

## 🛠 Pages & Routes (with Dummy Data / Skeleton)

### `/` → Home Page

* Simple landing page with tagline: *“Your Mood, Your Music & Content”*
* CTA Button: **Start Now** → navigates to `/mood`

---

### `/mood` → Mood Input Page

* Components:

    * **Selfie Upload (dummy, no API yet)**
    * **MBTI Selector (dropdown/cards)**
    * **Favorites Input (chips with dummy values)**
    * **Submit Button → navigates to `/recommendations`**

---

### `/recommendations` → Recommendations Page

* Show **dummy cards** with skeleton loading:

    * **Music tab** (3 fake song cards)
    * **Blogs tab** (2 fake blog summaries)
    * **Memes tab** (2 dummy meme images)

Use Zustand to store the **user’s mood input** from `/mood` so this page can read it.

---

### `/profile` → Profile Page

* Show **dummy profile card**:

    * Selfie (placeholder avatar)
    * MBTI: “INTP”
    * Active Since: “Sep 2025”
    * History list (3 fake moods + dates)

---

### `/about` → About Page

* Dummy text: *“This app uses AI & Cloud to recommend content based on your mood.”*
* Icons for AWS, AI, Music, Blogs.

---

### `/auth/login` → Login Page

* Formik + Yup form with fields:

    * Email
    * Password
* On submit → just console.log values (for now).

---

### `/auth/signup` → Signup Page

* Formik + Yup form with fields:

    * Name
    * Email
    * Password
    * Confirm Password
* On submit → console.log values.

---

## 🏗 Features & State Management

### Zustand Store (`/src/store/appStore.ts`)

* Holds:

    * `user` (dummy object with id, name, MBTI)
    * `mood` (selected mood info from `/mood`)
    * `recommendations` (dummy array of songs/blogs/memes)

### Form Handling

* Use **Formik + Yup** for `Login` and `Signup`.
* Other forms (mood input, favorites) → can use Formik too for consistency.

---

## 📌 Deliverables for this Phase

* ✅ Navigation component (links to all pages)
* ✅ Routes set up with TanStack Router
* ✅ Pages with skeleton UI / dummy data
* ✅ Formik + Yup integrated for auth forms
* ✅ Zustand store managing mood + profile dummy state

---