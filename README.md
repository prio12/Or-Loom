# Or & Loom

A modern fashion store frontend built for the Oxivos Round 1 project task. No backend, all data comes from a local JSON file.

## Live Demo

[Live Link](https://or-loom.vercel.app/)

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + daisyUI
- Zustand (with persist middleware for cart/wishlist)
- Framer Motion

## Pages

- Home — hero banner (Men/Women split) + featured products
- Products — full listing with category + gender filters, sort by price, search, grid/compact view toggle, filter drawer
- Product Details — full product info, color/size selection, add to cart, wishlist toggle
- Cart — add/remove items, update quantity, empty state
- Wishlist (bonus) — saved products

## Features

- Fully responsive (mobile, tablet, desktop)
- Client-side routing (Next App Router)
- Cart & wishlist state via Zustand, persisted to localStorage
- Bento-style variable grid layout on the "All" products view
- Page transitions and scroll-based animations (Framer Motion)
- URL-driven filters (category/gender/search are shareable via query params)

## Running Locally

```bash
npm install
npm run dev
```
