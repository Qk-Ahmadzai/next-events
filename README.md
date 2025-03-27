# Next.js Events App

![Project Screenshot](https://raw.githubusercontent.com/Qk-Ahmadzai/next-events/refs/heads/main/Screenshot.PNG)

🚀 **GitHub Repo:** [https://github.com/Qk-Ahmadzai/next-events](https://github.com/Qk-Ahmadzai/next-events)  
🌐 **Live Demo:** [Add Vercel/Netlify link here]

A Next.js 14 application that allows users to browse and filter events by year and month, demonstrating dynamic routing, server components, and responsive design.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features
✅ Dynamic event filtering by year & month  
✅ SEO-friendly with Next.js App Router  
✅ Responsive design for all devices  
✅ Proper error handling for invalid routes  
✅ Optimized static and dynamic rendering  

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS Modules
- **Data:** Local JSON (dummy data)
- **Deployment:** Vercel (recommended)
- **Version Control:** Git & GitHub

## 📂 Folder Structure
next-events/
├── app/
│ ├── events/
│ │ ├── [...slug]/
│ │ │ └── page.js
│ │ └── page.js
│ └── layout.js
├── components/
│ ├── EventList/
│ └── EventSearch/
├── dummy-data/
├── public/
├── styles/
└── README.md


## ⚙️ Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/Qk-Ahmadzai/next-events.git
   cd next-events

   npm install
   npm run dev

   🚀 Running the App
Homepage: /

All Events: /events

Filtered Events: /events/2023/12 (example)

🌍 Deployment
Vercel (Recommended)
Push code to GitHub

Import repo at Vercel

Deploy!

Other Hosts
Configure as static site (if using next export) with SSR support.

🔍 Code Structure
Dynamic Route ([...slug])

// app/events/[...slug]/page.js
const [year, month] = params.slug;
const filteredEvents = getFilteredEvents({ year: +year, month: +month });

