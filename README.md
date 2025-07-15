



# 🔐 Threads – Fullstack Upload + Auth App

A fully responsive, fullstack web application built with modern technologies like **Next.js Server Actions**, **Clerk authentication**, **UploadThing file handling**, and **Tailwind CSS** with **shadcn/ui** components.
<div align="center">
  <a href="https://new-alpha-liard.vercel.app" target="_blank">
    <img src="https://github.com/bonguchandu123/new/assets/127278740/8488ab2e-2ef3-4091-86c6-6dc2682c1880" alt="Project Preview" width="100%" />
  </a>
</div>


---

## 🌐 Live Demo

🔗 [Click here to view the live site](https://new-alpha-liard.vercel.app)

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, Server Actions)
- **Styling:** Tailwind CSS + shadcn/ui
- **Authentication:** Clerk
- **File Upload:** UploadThing
- **Database:** MongoDB (with Mongoose)
- **Deployment:** Vercel

---

## 🔒 Environment Variables

This app requires the following environment variables.  
⚠️ **Important:** Do **not** commit your `.env` file.

Create a `.env.local` file with this structure:

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
