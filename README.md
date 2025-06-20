# 🚀 CareerLaunch – MERN Stack Job Portal

CareerLaunch is a full-featured **MERN stack job portal** designed to connect job seekers with potential employers. It enables users to search and apply for jobs, while allowing companies to post new job opportunities — all in a modern, responsive web interface.

---

## 📌 Overview

CareerLaunch is built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides a clean and intuitive user experience for:

- 🔍 Job Seekers – Browse listings, search with filters, and apply to jobs.
- 🧑‍💼 Employers – Post new jobs and manage open positions.
- 🔐 Authentication – Role-based login system for job seekers and employers.

---

## ✨ Features

- 🔎 **Search Jobs** by title, location, company, or keywords  
- 📤 **Apply to Jobs** with a single click  
- 📝 **Post New Jobs** (Employer access)  
- 🔐 **User Authentication** with JWT  
- 📂 **Job Details Page** with description, requirements, etc.  
- 🌐 **Responsive Design** for desktop and mobile  
- 🧠 **MongoDB-backed Storage** for jobs, users, and applications

---

## 🛠️ Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js, CSS          |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB + Mongoose     |
| Auth         | JSON Web Tokens (JWT)  |
| Hosting      | (e.g., Render, Vercel) |

---

## 📁 Project Structure

![image](https://github.com/user-attachments/assets/e872f697-a8d4-4685-a3b3-3a3d93465e5c)


---

## ⚙️ Installation & Setup

### 1. Clone the Repository

- git clone https://github.com/SHAKSHIY/CareerLaunch-website.git
- cd CareerLaunch-website

### 2. Set up the Backend
- cd server
- npm install

**Create a .env file inside server/ and add:**

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key
- PORT=5000
**Start the backend server:**

- npm start

### 3. Set up the Frontend

- cd ../client
- npm install
- npm start
- Visit the app at: http://localhost:3000



## 🔌 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/auth/register` | Register a new user       |
| POST   | `/api/auth/login`    | Authenticate user & return JWT token |

---

### 📄 Job Routes

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| GET    | `/api/jobs`           | Get all job listings            |
| GET    | `/api/jobs/:id`       | Get details of a single job     |
| POST   | `/api/jobs`           | Post a new job (employer only)  |
| PUT    | `/api/jobs/:id`       | Update a job (employer only)    |
| DELETE | `/api/jobs/:id`       | Delete a job (employer only)    |

---

### 📩 Application Routes

| Method | Endpoint                  | Description                           |
|--------|---------------------------|---------------------------------------|
| POST   | `/api/jobs/:id/apply`     | Apply to a job (job seeker only)      |
| GET    | `/api/applications/:userId` | Get all applications for a user      |
| GET    | `/api/applications/job/:jobId` | Get all applicants for a job (employer) |


