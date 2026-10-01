# Nissi Aluminium Works — Website

A fast, responsive one-page landing website for **Nissi Aluminium Works (Sales & Services)**, Hyderabad — featuring a live SFT dimension & cost estimator, service catalogue, project gallery and WhatsApp enquiry integration.

Built with **React 18 + JavaScript + Vite**. No backend, no authentication, no TypeScript.

---

## 1. Project Overview

- **One-page landing site** with sections: Hero, Services, Live SFT Estimator, Gallery, Why Choose Us, About, Contact, Final CTA and Footer.
- **Live SFT Estimator** — visitors enter width/height (feet + inches), pick a service and quantity, and get an instant approximate area (SFT) and cost. Multiple items can be added, deleted and totalled.
- **WhatsApp integration** — "Get Estimate on WhatsApp" opens WhatsApp with a pre-filled, auto-generated enquiry message containing all entered dimensions and totals.
- **Print estimate** — a dedicated print layout prints only the estimate summary (not the whole website).
- **Mobile-first** — sticky navbar with drawer menu, fixed bottom action bar (Call / WhatsApp / Estimate) and a floating WhatsApp chat button.
- **Accessible & SEO-ready** — semantic HTML, labelled form fields, alt text, keyboard-friendly lightbox, Open Graph tags and LocalBusiness JSON-LD.

## 2. Requirements

- **Node.js 18+** (LTS recommended)
- **npm 9+** (ships with Node)

No database, API keys or environment variables are needed.

## 3. Installation

```bash
npm install
```

## 4. Run the Dev Server

```bash
npm run dev
```

Then open the printed local URL (default: `http://localhost:5173`).

## 5. Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder. Preview the production build locally with:

```bash
npm run preview
```

## 6. How to Change the WhatsApp Number

The business contact details live in **one file**: `src/data/business.js`.

```js
whatsappNumber: '919866725149',   // used for wa.me links (country code + number, no +)
phoneTel: '+919866725149',        // used for tel: links
phoneDisplay: '9866725149',       // shown on screen
```

Update these three values and every WhatsApp/Call button across the site updates automatically.

## 7. How to Change Service Rates

All sample rates live in **`src/data/rates.js`**:

```js
export const serviceRates = {
  aluminiumWindow: 360,
  aluminiumDoor: 450,
  // ...
}
```

Edit any number and the estimator, summary card, print sheet and WhatsApp message all recalculate automatically. These are **sample rates only** — the site always states that the final quotation depends on material and site requirements.

## 8. How to Add Service Photos

Service card images are referenced in `src/data/services.js`:

1. Drop the photo into `public/images/` (e.g. `public/images/service-windows.jpg`).
2. In `src/data/services.js`, set the `image` field of the matching service to `/images/your-photo.jpg`.
3. Update the `alt` text to describe the real photo.

Recommended size: ~800px wide, landscape (4:3). Keep files under ~200 KB for fast loading.

## 9. How to Add Gallery Photos

1. Drop the photo into `public/images/`.
2. Open `src/data/gallery.js` and add an item:

```js
{
  id: 'g13',
  title: 'Office Partition — Banjara Hills',
  category: 'Partitions',   // Windows | Doors | Partitions | Mesh | Fabrication
  image: '/images/your-photo.jpg',
  alt: 'Describe the photo for screen readers',
}
```

The category filter buttons are generated from `GALLERY_CATEGORIES` in the same file — add a new category there if needed. Images are lazy-loaded and open in a lightbox.

## 10. Deploying to Vercel

**Option A — Dashboard:**
1. Push this folder to a GitHub/GitLab repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

**Option B — CLI:**

```bash
npm i -g vercel
vercel          # from this folder
vercel --prod   # production deploy
```

## 11. Deploying to Netlify

**Option A — Dashboard:**
1. Push the repo to GitHub/GitLab.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Click **Deploy site**.

**Option B — CLI:**

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Project Structure

```
nissi-aluminium-website/
├── public/
│   ├── favicon.ico
│   └── images/            # hero, services, gallery photos
├── src/
│   ├── components/        # Navbar, Hero, Services, Estimator, Gallery, ...
│   ├── data/              # business.js, services.js, rates.js, gallery.js
│   ├── hooks/             # useScrollPosition.js
│   ├── styles/            # variables.css + per-section CSS
│   ├── utils/             # calculator.js, currency.js, whatsapp.js
│   ├── App.jsx
│   └── main.jsx
├── index.html             # SEO meta, Open Graph, JSON-LD
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

© 2026 Nissi Aluminium Works. All Rights Reserved.
