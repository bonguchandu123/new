# 🔐 Threads - Auth + Upload App

A modern full-stack application built with **Next.js** using **Server Actions**, **Clerk Authentication**, **UploadThing**, and **Tailwind CSS**. This project supports secure file uploads, user authentication, and a responsive UI powered by shadcn/ui components.

![App Screenshot](./public/web.png)

## 🌐 Live Demo

🔗 [Visit the Live Site](https://new-alpha-liard.vercel.app/)

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, Server Actions)
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth:** Clerk
- **File Uploads:** UploadThing
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel

---

## 🔒 Environment Variables

This project uses environment variables for API keys, MongoDB connection, and Clerk configuration.

⚠️ **Important:** Do **not** share your real `.env` values publicly.

Instead, use the following `.env.example` format and provide only the variable **names** (not values):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
MONGODB_URL=
UPLOADTHING_SECRET=
NEXT_CLERK_WEBHOOK_SECRET=
