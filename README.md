# Prescripto

> **Live Project**: [https://prescripto-frontend-lyart.vercel.app](https://prescripto-frontend-lyart.vercel.app)

Prescripto is a modern digital prescription and pharmacy management platform built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It enables users to upload prescriptions, manage medicine orders, track deliveries, and communicate with pharmacists securely and efficiently.

---

# Tech Stack

### Frontend:
- React (Hooks, Context API)
- React Router DOM
- Axios
- Tailwind CSS / CSS Modules
- React Toast Notifications

### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication

### Deployment:
- Frontend: Vercel
- Backend: Render / Railway / Vercel Serverless

---

# Core Features

- 📄 Upload & Scan Prescriptions
- 🔐 Secure Login & Registration (JWT)
- 💊 Browse Medicine & Pharmacy Listings
- 🛒 Add Medicines to Cart & Place Orders
- 🚚 Track Order Status
- 📱 Responsive UI for Mobile & Desktop

---

# Project Structure (Frontend)

```
├── public/
├── src/
│   ├── api/              # API integrations
│   ├── assets/           # Icons and images
│   ├── components/       # Reusable UI elements
│   ├── context/          # Global state (user, cart)
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Views like Home, Prescriptions, Orders
│   ├── routes/           # Route definitions
│   ├── styles/           # CSS styling setup
│   ├── App.jsx
│   └── main.jsx
```

---

# Getting Started

### Prerequisites

- Node.js >= 14
- MongoDB Atlas URI

### Installation

```bash
git clone https://github.com/<your-username>/prescripto.git
cd prescripto
npm install
```

### Environment Setup

Frontend `.env`:
```env
REACT_APP_API_URL=https://your-backend-domain/api
```

Backend `.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

---

# Scripts

```bash
# Run frontend dev server
npm run dev

# Build frontend for production
npm run build
```

---

# API Structure (Simplified)

- `POST /auth/register` - Register new user
- `POST /auth/login` - Authenticate user
- `POST /prescriptions` - Upload prescription
- `GET /medicines` - List available medicines
- `POST /cart` - Add to cart
- `POST /orders` - Place an order
- `GET /orders/:userId` - View order history

---

# Future Enhancements

- OCR Integration for Auto Prescription Read
- Admin Panel for Pharmacists
- Real-Time Delivery Tracking
- Push Notifications
- Payment Gateway Integration

-
