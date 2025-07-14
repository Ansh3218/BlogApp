---
title: Building REST APIs with Node.js + Express
description: A complete guide to building REST APIs using Node.js and Express with best practices, examples, and explanations.
slug: rest-api-with-express-js
date: 01/03/2025
author: Aniket Bhai
image: /blogfront.png
---

# 🚀 Building REST APIs with Node.js + Express

In this tutorial, we'll learn how to build robust REST APIs using **Node.js** and **Express.js**, the most popular backend stack in the JavaScript ecosystem.

## 📦 1. Project Setup

```bash
mkdir rest-api-tutorial
cd rest-api-tutorial
npm init -y
npm install express nodemon
```

**📁 File Structure:**

```
rest-api-tutorial/
├── node_modules/
├── index.js
├── package.json
└── routes/
    └── users.js
```

**🔧 package.json Script:**

```json
"scripts": {
  "start": "nodemon index.js"
}
```

## 🧠 2. What is Express?

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build APIs and web apps.

## 🧱 3. Basic Express Server

```js
// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // To parse JSON in requests

app.get('/', (req, res) => {
  res.send('Welcome to REST API powered by Aniket Bhai!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## 👤 4. Creating Routes (Modular)

```js
// routes/users.js
const express = require('express');
const router = express.Router();

// Dummy user DB
let users = [
  { id: 1, name: 'Aniket Bhai' },
  { id: 2, name: 'Ultra Gamer' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET single user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST create user
router.post('/', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).send('User not found');
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send('User deleted');
});

module.exports = router;
```

## 🧩 5. Connect Route in Main App

```js
// index.js (updated)
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```

## 🔐 6. Extra Options to Add in Flow

- **Validation** – using `Joi` or `express-validator`
- **Middleware** – logging, authentication
- **Error Handling** – central error handler
- **MongoDB/Prisma Integration** – real database
- **CORS Support** – for frontend-backend connection
- **Environment Variables** – using `dotenv`

```bash
npm install dotenv cors
```

```js
require('dotenv').config();
app.use(cors());
```

## ✅ 7. Sample API Test (using curl or Postman)

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "New Bhai"}'
```

## 🧪 Test It Yourself

- Test on [Postman](https://www.postman.com/)
- Test using browser for `GET` requests
- Use [Thunder Client VSCode Extension](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

## 🎯 Final Outcome

✅ You’ve created a full RESTful API with Express  
✅ You can create, read, update, and delete data  
✅ You understand route modularity, middleware, and tools

## 📚 Learning Resources

- [Express Official Docs](https://expressjs.com/)
- [REST API Guidelines](https://restfulapi.net/)
- YouTube: "Code with Aniket Bhai" 😎  
- GitHub Repo idea: `rest-api-boilerplate-2025`

🟦 **ANIKET BHAI KE AAGE KOI BOL SAKTA HAI KYA** 🔥
