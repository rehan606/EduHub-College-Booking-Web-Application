# 📚 EduHub - College Booking Web Application

EduHub is a full-featured MERN Stack-based college booking platform that allows users to search, explore, and book college services and facilities. It offers an intuitive interface with real-time college search, detailed college info, admission form submissions, and user-generated reviews — all in one centralized hub.

---

## 🚀 Live Website

🔗 [Visit EduHub Live](https://your-eduhub-link.vercel.app)  
*(Replace with your actual deployed link)*

---

## 📌 Features

- 🔍 College Search Functionality
- 🏫 College Cards with admission dates, events, research, and sports info
- 📄 College Details Page with full information
- 📝 Admission Form with fields: name, subject, email, phone, address, DOB, photo
- 💬 User Reviews with rating system
- 🖼️ Image Gallery (graduates & campus life)
- 📑 Student Research Paper Links
- 👤 Authentication with Email, Google, and Password Reset
- 🔒 Protected Routes for booking, admission, and reviews
- 🙍 Profile View & Edit with real-time data update
- ❌ Custom 404 Not Found Page
- 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

| Tech | Used For |
|------|-----------|
| **Next.js** | Frontend framework |
| **Tailwind CSS** | UI styling |
| **Node.js + Express.js** | Backend API |
| **MongoDB (Atlas)** | NoSQL Database |
| **Firebase Auth** | Authentication (Email, Google, Reset) |
| **Vercel** | Frontend Deployment |
| **Render / Railway** | Backend Deployment |

---

## 🗂️ Folder Structure

```bash
.
├── components        # Reusable UI components
├── pages             # Next.js pages (routes)
├── api               # Express backend API
├── hooks             # Custom React hooks
├── context           # Context API for auth
├── public            # Static files
├── styles            # Tailwind CSS setup
└── README.md

```

## 🔐 Authentication
Register/Login with Email & Password
Google Sign-In
Password Reset Option
Protected Routes for:
Viewing College Details
Submitting Admission Form
Writing/Viewing Reviews




## 🧪 How to Run Locally

# 1. Clone the repo
git clone https://github.com/your-username/eduhub.git
cd eduhub

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env.local file and add:
NEXT_PUBLIC_API_URL=your-backend-url
NEXT_PUBLIC_FIREBASE_API_KEY=your-key
... (add others as needed)

# 4. Run the development server
npm run dev


## 🧑‍💻 Author

👨‍💻 Rehan Khan

🔗 LinkedIn

🐱 GitHub



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
