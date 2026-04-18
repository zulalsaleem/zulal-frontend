# VideoTube - A Full-Stack Video Sharing Platform

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-skyblue?style=for-the-badge&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=for-the-badge&logo=mongodb)

A complete, full-stack web application built from the ground up,
combining features from platforms like YouTube and Twitter.
Users can register, upload videos, post tweets, subscribe to 
channels, comment, and create playlists.

### **Live Application:** [Coming Soon]
### **Backend API Repo:** [https://github.com/zulalsaleem/zulal-backend](https://github.com/zulalsaleem/zulal-backend)

---

## Core Features

| Dashboard & Content Management | Video Playback & Interaction | Social Feed (Tweets) |
| :---: | :---: | :---: |
| Complete dashboard for channel stats and full content management (Create, Update, Delete) for videos and playlists. | Interactive video player with real-time likes, subscriptions, and a full commenting system. | Fully functional micro-blogging feed where users can post tweets and view a live feed of all content. |

---

## Tech Stack

#### **Frontend**
- **Framework:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **HTTP Client:** Axios

#### **Backend** *(Written from scratch by me)*
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Media Storage:** Cloudinary
- **Authentication:** JWT (Access Token + Refresh Token)
- **File Uploads:** Multer

---

## Local Setup

1. Clone the repository:
   `git clone https://github.com/zulalsaleem/zulal-frontend.git`
2. Navigate to the directory:
   `cd zulal-frontend`
3. Install dependencies:
   `npm install`
4. Configure API URL in `src/constants/index.js`:
   `export const API_BASE_URL = "http://localhost:8000/api/v1"`
5. Run the development server:
   `npm run dev`

*(Make sure the backend server is running separately for full functionality.)*

---

## 👩‍💻 Author

**Zulal Saleem**
- GitHub: [@zulalsaleem](https://github.com/zulalsaleem)

---

## 📝 Note
Backend was built 100% from scratch — original code,
no boilerplate used. Full-stack project as part of
my 8th semester Final Year Project.
