# 📘 TanStack Query Pagination CRUD App

A frontend application built to demonstrate **pagination**, **CRUD operations**, and **server-state management** using **TanStack Query** and **React Router v7**, with **JSONPlaceholder** used as a mock backend API.

This project focuses on **real-world frontend architecture**, clean separation of concerns, and best practices for handling remote data in modern web applications.

---

## 🚀 Features

- Paginated list of posts (offset-based pagination)
- Individual post detail page
- URL-based pagination state (`?page=`)
- Back navigation that preserves pagination state
- Delete and update actions (mocked)
- Smooth pagination using cached data
- Shared layout across pages
- Custom 404 / Not Found page
- Clean UI using Tailwind CSS
- Modern routing using React Router v7 (Data Router)

---

## 🧠 Tech Stack

### Frontend
- React
- TypeScript
- TanStack Query
- React Router v7
- Axios
- Tailwind CSS

### Backend (Mock API)
- JSONPlaceholder

> ⚠️ JSONPlaceholder is a fake REST API.  
> Create, update, and delete requests return successful responses but **do not persist data**.

---

## 🔗 Backend API

**Base URL**

https://jsonplaceholder.typicode.com

### API Usage
- Fetch list of posts
- Fetch posts with pagination
- Fetch individual post details
- Simulated update and delete operations

Pagination is implemented using query parameters for start index and page size.

---

## 📂 Folder Structure

```
src/
├── api/
│   └── api.ts
├── components/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── layout/
│   └── Layout.tsx
├── pages/
│   ├── Home.tsx
│   ├── FetchRq.tsx
│   ├── FetchIndv.tsx
│   └── NotFound.tsx
├── types/
│   └── Post.ts
├── router.tsx
├── App.tsx
└── main.tsx
```

---

## 🧱 Layout Architecture

The application uses a **shared layout** that wraps all pages and includes:

- Header for branding
- Navigation bar for routing
- Main content area
- Footer with attribution

This approach ensures a consistent UI across all routes and allows easy expansion for multiple layouts in the future.

---

## 🧭 Routing

Routing is handled using **React Router v7 (Data Router)** with:

- Nested routes
- Shared layout via outlet rendering
- URL-driven pagination state
- Custom error and not-found handling

This provides predictable navigation and improved user experience.

---

## 🔄 Pagination Strategy

- Offset-based pagination
- Page state stored in the URL
- Pagination preserved on refresh and navigation

Benefits:
- Shareable URLs
- Browser back/forward support
- Refresh-safe navigation

---

## 🧪 Data Mutations

### Delete
- User confirmation before deletion
- UI updates immediately using cache manipulation
- Server request is simulated

### Update
- Partial updates supported
- Cache synchronization ensures UI consistency
- No page reload required

---

## ⚙️ Setup & Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will start locally and open in your browser.

---

## ⚠️ Important Notes

- JSONPlaceholder does not save data
- All mutations are simulated
- Data resets on refresh
- Ideal for learning, demos, and architectural reference

---

## 🎯 Learning Outcomes

This project helps you understand:

- Server-state management with TanStack Query
- Pagination with cached data
- URL-driven UI state
- Route-based layouts
- Clean frontend architecture
- Cache synchronization after mutations
- Real-world list → detail navigation flow

---

## 📌 Future Improvements

- Infinite scrolling
- Optimistic updates with rollback
- Custom confirmation modals
- Toast notifications
- Authentication and protected routes
- Integration with a real backend API

---

## 📄 License

This project is intended for **learning and demonstration purposes**.
