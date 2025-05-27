# HR Performance Dashboard

A feature-rich HR Dashboard built using Next.js and Tailwind CSS. This application allows HR managers to manage employees, track performance ratings, bookmark key individuals, and view analytics—all within a clean, responsive interface.

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Chart.js + react-chartjs-2**
- **Framer Motion (for animations)**
- **NextAuth.js (Authentication)**
- **Context API (Global State Management)**

---

## Features

### 1. Dashboard Homepage (`/`)

- Fetches users from `https://dummyjson.com/users?limit=20`
- Displays user cards with:
  - Full Name, Email, Age, Department (mocked)
  - Performance rating (1–5 stars)
  - Buttons: View, Bookmark, Promote
- Responsive design with theme toggle
- Supports pagination and a floating **"Create User"** modal

### 2. Search & Filter

- Real-time search by name, email, department
- Multi-select filters:
  - Department (HR, Engineering, etc.)
  - Performance Rating (1–5)
- Toggleable filter section integrated into the navbar

### 3. Dynamic User Detail Page (`/employee/[id]`)

- Displays full user profile:
  - Bio (mock), Phone, Address, Department, Rating
- Tabbed UI:
  - **Overview** — Personal info
  - **Projects** — Placeholder project details
  - **Feedback** — Feedback form with submission
- Smooth tab transitions using Framer Motion

### 4. Bookmark Manager (`/bookmarks`)

- Lists all bookmarked users
- Allows:
  - Removing users from bookmarks
  - UI-triggered Promote or Assign actions
- Updates sync with home and analytics page

### 5. Analytics Page (`/analytics`)

- Department-wise average rating bar chart
- Bookmark trends over 7 days (mocked line chart)
- Responsive and dark-mode compatible

---

## Advanced Functionality

- **Create User Modal**:
  - Form with validation (non-empty fields, positive age, department select)
  - Range input for rating
  - Adds new user to dashboard dynamically

- **Dark/Light Theme Toggle**:
  - Stored in `localStorage`
  - Affects entire layout and components

- **Accessibility Enhancements**:
  - Tab/keyboard focusable cards and buttons
  - Proper use of `aria-*` attributes for tabs and icons

- **Framer Motion Animations**:
  - Card fade-in and scale
  - Tab transitions
  - Swipe-to-bookmark gesture on cards

- **Authentication (NextAuth.js)**:
  - Login/Signup using credentials
  - Session-aware navbar: shows login/signup or logout
  - Authentication state stored in local/session

---

## Bonus Features

- Pagination on homepage
- Animated tab switches with Framer Motion
- Swipe-left gesture to auto-bookmark
- Persistent bookmark state (via context)
- Basic error states and form validations

---

## Folder Structure
```
/src
├── app/                             # Next.js App Router pages
│   ├── layout.js                    # Global layout (Navbar, Providers)
│   ├── page.js                      # Home Dashboard
│   ├── employee/
│   │   └── [id]/
│   │       └── page.js              # Dynamic user detail page
│   ├── bookmarks/
│   │   └── page.js                  # Bookmarked employees
│   ├── analytics/
│   │   └── page.js                  # Analytics page with charts
│   ├── login/
│   │   └── page.js                  # Login page (NextAuth/custom logic)
│   ├── signup/
│   │   └── page.js                  # Signup page (mock or credentials)
│   └── api/
│       └── auth/
│           └── [...nextauth]/route.js  # NextAuth.js config
│
├── components/
│   ├── Navbar.js                   # Top navigation bar
│   ├── EmployeeCard.js            # User display card
│   ├── CreateUserModal.js         # Floating modal to add new users
│   ├── FilterBar.js               # Search & multi-filter UI
│   └── Tabs/                      # Tabbed UI for user details
│       ├── OverviewTab.js
│       ├── ProjectsTab.js
│       └── FeedbackTab.js
│
├── context/
│   └── BookmarkContext.js         # Context API for managing bookmarks
│
├── hooks/
│   ├── useBookmarks.js            # Custom hook to access bookmark state
│   └── useSearch.js               # Handles search and filters
│
├── lib/
│   └── employeeUtils.js           # Utility to assign department and rating
│
├── styles/
│   └── globals.css                # Global Tailwind styles
│
├── middleware.js                  # (Optional) Protect routes using auth
└── tailwind.config.js             # Tailwind configuration
```

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/hr-dashboard.git
cd hr-dashboard
```
## Install Dependencies
```
npm install
```
## Set Up Environment Variables
### Create a .env.local file:
```
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```
## Run the Development Server
```
npm run dev
```
## Screenshots
![Screenshot (69)](https://github.com/user-attachments/assets/f05fe9d6-8f59-43d9-80a6-9c532fc3cb66)
![Screenshot (70)](https://github.com/user-attachments/assets/03e58f97-f771-41d4-8f49-fa98386d755a)
## Dashboard (Home)
Displays a searchable, paginated list of employees with filtering and bookmarking functionality.
![Screenshot (72)](https://github.com/user-attachments/assets/473cdd71-470e-4454-a6b4-0c1d2d9d0f6b)
## Dynamic User Detail Page
Profile details with tabbed UI for Overview, Projects, and Feedback (with accessible structure and animations).
![Screenshot (75)](https://github.com/user-attachments/assets/200d1b3c-4e32-491f-8d56-ab7aad997958)
![Screenshot (76)](https://github.com/user-attachments/assets/a630cc67-c347-418c-bbf0-5a12a679efa6)
![Screenshot (77)](https://github.com/user-attachments/assets/4607b13b-3adf-4b68-8a67-8eb61d6d7cc9)
## Bookmarks Page
All bookmarked users in one view, with Promote and Remove UI actions.
![Screenshot (78)](https://github.com/user-attachments/assets/95cc7386-2f39-4e13-a047-89f35e171674)
## Analytics Page
Live-rendered charts displaying department-wise performance and bookmark trends.
![Screenshot (79)](https://github.com/user-attachments/assets/e252c7b7-93ff-4087-bf01-ab18b0e5b0f1)
![Screenshot (80)](https://github.com/user-attachments/assets/d0e8dda8-a98b-4eef-abd9-162426ffaaac)
## Create User Modal
Accessible from the homepage, allows HR managers to manually add employees with validation.
![Screenshot (81)](https://github.com/user-attachments/assets/2e432762-9224-4a38-a59c-61dac4ad429d)

![Screenshot (82)](https://github.com/user-attachments/assets/79abf6e7-5b6d-442f-90d5-77606674837b)
## Dark And Light Theme Support
![Screenshot (83)](https://github.com/user-attachments/assets/4cdcfb5e-f9b5-49fe-b914-d09af1f3e0c5)
![Screenshot (84)](https://github.com/user-attachments/assets/8bd2bc4e-b500-4a22-bccd-4c8b74ae57ef)
![Screenshot (85)](https://github.com/user-attachments/assets/c20bcf5e-257f-4100-ab3a-5104c1010025)
![Screenshot (86)](https://github.com/user-attachments/assets/62621ddd-545c-4a49-b125-1cdc16aceed8)
![Screenshot (87)](https://github.com/user-attachments/assets/e4beda02-8aec-4e0a-a7e9-6ddd22b96bee)

## 🙌 Credits
This HR Performance Dashboard was designed and developed by **Harsh Singh**.

Special focus was given to clean UI/UX, modular architecture, reusable components, and a smooth developer experience using modern React + Next.js tooling.

