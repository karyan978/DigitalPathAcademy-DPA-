# DPA Computer Institute App 📱

A modern mobile application developed for **DPA Computer Institute, Biharsharif (Khadakpar)** to support students, mentors, and the institute community with courses, discussions, and learning resources.

This app is built using **React Native (Expo)** for cross‑platform development and **Firebase** for backend services.

---

## 🚀 Tech Stack

* **React Native (Expo)** – Cross‑platform mobile app (Android & iOS)
* **Firebase Authentication** – Secure user login & signup
* **Firebase Firestore** – Real‑time database
* **Firebase Storage** – Media & profile images
* **Expo Vector Icons** – Icons
* **Responsive UI** – Works on all screen sizes

---

## ✨ Features

* 🔐 User Authentication (Login / Register)
* 📚 Course Listing & Popular Courses
* 💬 Community Discussion Forum
* ➕ Create New Discussions & Replies
* 👍 Like & Interact with Posts
* 👨‍🏫 Mentor & Student Profiles
* 🔍 Search Functionality
* 🎨 Modern UI with Gradient Header
* 📱 Fully Responsive Design

---

## 🖼️ App Screens (UI Preview)

* Home Screen
* Community Discussions
* Mentors & People Section
* Course Listing
* User Profile

*(Design inspired by modern learning & community platforms)*

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/dpa-computer-institute-app.git
cd dpa-computer-institute-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Expo App

```bash
npx expo start
```

Scan the QR code using **Expo Go App** on your mobile.

---

## 🔑 Firebase Configuration

Create a Firebase project and add your config in a separate file:

```js
const firebaseConfig = {
  apiKey: "AIzaSyAalcxqBySUwczD7_AqUa60q4oiZUbWi0o",
  authDomain: "digitalpathacademy.firebaseapp.com"",
  projectId: "digitalpathacademy",
  storageBucket: "digitalpathacademy.appspot.com",
  messagingSenderId: "606655828580",
  appId: "1:606655828580:android:ef7a0cc270eed3db764571"
};
```

⚠️ **Do not push Firebase keys publicly**. Use `firebase/firebaseConfig.js` file.

---

## 📂 Project Structure

```txt
src/
 ├── screens/
 ├── components/
 ├── navigation/
 ├── services (firebase)
 ├── constants
 └── assets
```

---

## 🎯 Purpose of the App

The goal of this app is to **digitally empower students of DPA Computer Institute** by providing:

* Easy access to courses
* A healthy learning community
* Mentor‑student interaction
* Centralized academic resources

---

## 👨‍💻 Developed By

**DPA Computer Institute – Biharsharif (Khadakpar)**
React Native Developer

---

## 📜 License

This project is developed for educational and institutional use.

---

⭐ If you like this project, don’t forget to give it a star on GitHub!
