# 🚀 Anav.io

![Anav.io Banner](./screenshots/home-feed.png)

> **Where you can truly be yourself**

Anav.io is a modern full-stack social media web application designed to give users a space to connect, share posts, interact with content, and engage with a growing community.

## ✨ Features

### 👤 User Authentication

* User Registration
* User Login
* Session Management
* Duplicate Email Detection

### 📝 Posts

* Create Posts
* View Posts Feed
* Dynamic Feed Rendering
* Persistent Data Storage using MongoDB

### ❤️ Likes

* Like Posts
* Unlike Posts
* Real-time Like Count Updates
* Like State Persistence after Refresh
* Duplicate Like Prevention

### 💬 Comments

* Add Comments to Posts
* View Post Comments
* Interactive Comment System

### 📷 Stories

* Create and Upload Stories
* Image and Media Uploads
* Story Preview and Viewer
* 24-Hour Story Expiry
* Story Seen Status

### 👤 User Profiles

* View User Profiles
* Profile Information
* User Posts
* Social Connections

### 🎨 Modern UI

* Responsive Design
* Smooth Animations using Framer Motion
* Modern Social Media Inspired Interface
* Mobile-Friendly Layout
* Clean and Interactive User Experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* Lucide React

### Backend

* Spring Boot
* Java
* Maven
* Spring Data MongoDB
* JWT Authentication
* Lombok

### Database

* MongoDB Atlas / MongoDB

### Media Storage

* Cloudinary

---

## 📂 Project Structure

```text
Anav.io/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── src/
├── public/
├── package.json
├── vite.config.js
└── ...
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/annu2677/Anav.io.git
cd Anav.io
```

---

### Frontend Setup

```bash
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies and run:

```bash
./mvnw spring-boot:run
```

For Windows:

```bash
mvnw.cmd spring-boot:run
```

Backend will run on:

```text
http://localhost:9999
```

---

## 🔐 Environment Variables

Create a `.env` file and configure the required variables.

Example:

```env
VITE_API_URL=http://localhost:8080
```

Backend configuration should be added to:

```text
application.properties
```

---

## 📸 Screenshots

### 🔐 Login Page

![Login Page](./screenshots/login-page.png)

Secure user authentication with a clean and modern interface.

---

### 📝 Registration Page

![Registration Page](./screenshots/signup-page.png)

New users can create an account using their name, username, email, and password.

---

### 🏠 Home Feed

![Home Feed](./screenshots/home-feed.png)

Interactive social feed displaying user posts, likes, comments, and trending topics.

---

### 📷 Create Post – Image Upload

![Create Post Upload](./screenshots/create-post-upload.png)

Users can upload images directly from their device while creating a new post.

---

### ✍️ Create Post – Caption Writing

![Create Post Caption](./screenshots/create-post-caption.png)

Add captions and share content with the community in a few clicks.

---

## 🎯 Future Improvements

* Real-Time Messaging
* Notifications
* Advanced Search Functionality
* Additional Social Features
* Performance Optimization
* Further UI/UX Enhancements

---

## 👩‍💻 Author

**Annoaja Priyadarshini**

Built with ❤️ using React, Spring Boot, MongoDB, and Cloudinary.

> **Anav.io — Where you can truly be yourself.**
