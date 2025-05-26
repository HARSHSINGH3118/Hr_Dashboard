# 🧑‍💼 HR Performance Dashboard

A feature-rich mini HR Dashboard for tracking employee performance, managing bookmarks, and analyzing insights. Built with **Next.js App Router**, **Tailwind CSS**, and **NextAuth.js**.

---

## 🔧 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **UI:** Tailwind CSS
- **State Management:** Context API (`BookmarkContext`)
- **Authentication:** NextAuth.js (Credentials provider)
- **Charts:** Chart.js via `react-chartjs-2`

---

## 📦 Features Overview

### 1. 🏠 Dashboard Homepage (`/`)
- Fetches dummy users from `https://dummyjson.com/users?limit=20`
- Displays:
  - Full Name, Email, Age
  - Randomly assigned **Department** and **Performance Rating**
- Buttons:
  - **View:** Navigate to detailed profile
  - **Bookmark:** Save to `/bookmarks`
  - **Promote:** Mock alert
- **Pagination:** 6 users per page
- **Create User Modal:** Add new user manually

### 2. 🔍 Search & Filter
- Filter users by:
  - 🔎 Name, Email, Department
  - 🏷️ Department (multi-select)
  - ⭐ Rating (multi-select)
- Filter UI is toggled via a button (not shown by default)

### 3. 👤 User Detail Page (`/employee/[id]`)
- Shows:
  - Address, phone, rating, department
  - Bio and performance tabs:
    - **Overview**, **Projects**, **Feedback**
- Tabbed layout using client-side state

### 4. 📌 Bookmarks Page (`/bookmarks`)
- Lists all bookmarked employees
- Allows:
  - **Remove from bookmarks**
  - **Promote**
  - **Assign to project**

### 5. 📊 Analytics Page (`/analytics`)
- Department-wise average rating chart (bar)
- Bookmark distribution chart (pie)
- Charts use `Chart.js`

### 6. 🔐 Authentication (NextAuth.js)
- Login using hardcoded credentials:
  - **Email:** `admin@example.com`
  - **Password:** `admin`
- Protects dashboard routes using `getServerSession`
- Logout available from Navbar

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hr-dashboard.git
cd hr-dashboard
```
## Install Dependencies
```
npm install
```
## Create .env.local
```
NEXTAUTH_SECRET=your_generated_secret_here
```
## Run the Dev Server
```
npm run dev
```
```
Email: admin@example.com

Password: admin

```
## Folder Structure
```
src/
├── app/
│   ├── page.js                # Protected Dashboard route
│   ├── HomeClient.js          # Main Dashboard component
│   ├── bookmarks/
│   ├── analytics/
│   └── employee/[id]/         # Dynamic user detail
│
├── components/
│   ├── Navbar.js
│   ├── EmployeeCard.js
│   ├── FilterBar.js
│   ├── CreateUserModal.js
│   ├── DepartmentChart.js
│   └── BookmarkTrend.js
│
├── context/
│   └── BookmarkContext.js
│
├── hooks/
│   └── useSearch.js
│
├── lib/
│   └── employeeUtils.js
```
## Key Concepts Used
1. Next.js App Router with Server & Client Components

2.  Protected routes using getServerSession()

3.  Context API for global bookmark state

4.  Chart.js integration for analytics

5.  Responsive UI with Tailwind CSS

6.  Dark mode toggle (client-only)

##  Screenshots
![Screenshot (42)](https://github.com/user-attachments/assets/c4c3d4d5-58f8-4b2b-beaf-4d2f5feaddc8)
![Screenshot (43)](https://github.com/user-attachments/assets/5c64a270-93c8-41d7-9634-8a98a0216e3e)
![Screenshot (44)](https://github.com/user-attachments/assets/c5c41de9-367d-4fa4-bc0d-7981b321142f)
![Screenshot (45)](https://github.com/user-attachments/assets/73c4fc8d-8873-4495-a3f1-2bcc33c53bb0)
![Screenshot (46)](https://github.com/user-attachments/assets/fd38f800-226e-4a4c-950d-3718a6ee562c)
![Screenshot (48)](https://github.com/user-attachments/assets/14147bb6-0fb9-4d0e-9904-446f27108d65)
![Screenshot (49)](https://github.com/user-attachments/assets/1ee59a49-4ef7-4ff2-a358-7207a0a9c742)
![Screenshot (53)](https://github.com/user-attachments/assets/f8d37390-44d7-44e9-969a-d702714a215e)
![Screenshot (55)](https://github.com/user-attachments/assets/27b610c0-2063-4bed-8c9b-f7c5de531099)
![Screenshot (52)](https://github.com/user-attachments/assets/56de047f-3282-49c6-b906-068ffa7b20be)

##  Credits
```
Harsh Singh 
```
