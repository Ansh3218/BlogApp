---
title: TypeScript Basics to Advanced
description: This is a complete TypeScript tutorial covering everything from setup to real-world usage. Best suited for JavaScript developers who want to scale with TypeScript.
slug: ts-typescript
date: 01/03/2025
author: Harray
image: /blogfront.png
---

# 📘 TypeScript Basics to Advanced – Complete Guide in Hindi

# 🟡 Phase 1: TypeScript

## 🧠 Introduction

**TypeScript** ek superset hai JavaScript ka, jo type safety, static checking aur better tooling support provide karta hai. Ye large-scale and scalable applications ke liye perfect hai. Is guide me hum `Beginner → Advanced` level tak TypeScript ko step-by-step samjhenge.

---

## 🟢 Phase 1: Getting Started with TypeScript

### 🔧 Installation & Setup

```bash
npm install -g typescript
tsc --init

```

### ✏️ Example

```ts

🟡 Phase 2: TypeScript Fundamentals

//  📌 Basic Types

let userName: string = "Aniket";
let userAge: number = 25;
let isOnline: boolean = true;
let skills: string[] = ["JS", "TS", "React"];

// 🔗 Union Types & Type Aliases

type Status = "loading" | "success" | "error";
let currentStatus: Status = "success";

// 📐 Interfaces

interface User {
  id: number;
  name: string;
  email?: string; // optional
}

const user: User = {
  id: 1,
  name: "Aniket Bhai",
};

// 🧮 Functions with Types

function multiply(a: number, b: number): number {
  return a * b;
}

🟣 Phase 3: TypeScript in the Real World

// 🔄 Type Assertions

let input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);

// ⚙️ Generics

function identity<T>(value: T): T {
  return value;
}

let result = identity<string>("Hello");

// 🎌 Enums

enum Role {
  ADMIN,
  USER,
  GUEST,
}

const myRole: Role = Role.USER;

// 🧬 Advanced Types (Intersection Types)

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;


🟠 Phase 4: TypeScript with React (Bonus)

// 🧩 Functional Component Example

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

```
# 💡 Tip: Use tsx file extension when working with React + TypeScript