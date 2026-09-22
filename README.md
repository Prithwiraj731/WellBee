# WellBee Pharmaceutical Private Limited

> **Corporate Web Platform & Formulation REST API**  
> *Quality • Trust • Innovation • Healthcare*

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.19-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()
[![Compliance](https://img.shields.io/badge/Compliance-cGMP%20%7C%20Schedule%20M-0D9488.svg)]()

---

## Overview

**WellBee Pharmaceutical Private Limited** is a research-backed, ethical pharmaceutical enterprise dedicated to developing, formulating, and distributing high-bioequivalence pharmaceutical products across primary, acute, and chronic therapeutic segments.

This repository houses the full-stack corporate web application and backend API server. It is engineered with an executive, clinical-grade design system, providing healthcare providers, trade stockists, hospital procurement committees, and institutional distributors with an instant, interactive portal to access product monographs, quality assurance protocols, and wholesale distribution desks.

---

## Key Features

- **Executive Clinical Design**: Trust Navy (`#0A192F`) and Clinical Sapphire (`#1A56DB`) aesthetic with high-legibility medical typography (*Plus Jakarta Sans* & *Inter*).
- **Subtle, Restrained Motion**: Smooth, once-on-scroll entrance animations powered by **Framer Motion**; zero disruptive loops or gimmicks.
- **Dynamic Formulation Catalogue**: Real-time live filtering and search engine indexing all 10 core formulations across Gastroenterology, Pulmonology, Orthopaedics, Paediatrics, and Pain Management.
- **Interactive Technical Monographs**: Accessible, high-contrast modal windows detailing active pharmaceutical ingredients (APIs), excipients, pharmacopeial standards (IP/BP), dissolution kinetics, and statutory Schedule H prescription warnings.
- **Commercial Inquiry & Distribution Desk**: Integrated contact gateway connected to the Node.js Express backend (`POST /api/enquiries`) with bot-prevention captcha and unique ticket identification (`WB-XXXXX`).
- **Talent Acquisition Engine**: Career openings portal with application submission workflow (`POST /api/careers/apply`).
- **Pharmacovigilance & Drug Safety**: Dedicated adverse event reporting channel (`pv@wellbeepharma.com`) and regulatory hotline.
- **SEO & Discoverability**: Validated XML Sitemap (`/sitemap.xml`), Robots Exclusion Protocol (`/robots.txt`), and Schema.org `MedicalOrganization` structured metadata.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 | Declarative component UI architecture |
| **Build & Bundler** | Vite 5 | Instant Hot Module Replacement (HMR) & optimized tree-shaken bundling |
| **Backend Engine** | Node.js (ESM) + Express 4 | RESTful endpoints for formulations, distribution tickets, and careers |
| **Icons & Typography** | Lucide React + Google Fonts | Clean medical vector iconography & Plus Jakarta Sans / Inter fonts |
| **Motion & Micro-interactions** | Framer Motion | Smooth viewport entrance animations and accessible modal transitions |
| **Process Orchestration** | Concurrently | Single-command concurrent startup for frontend and backend |
| **Styling** | Vanilla CSS3 Design Tokens | Maximum performance, zero framework overhead, CSS variables |

---

## System Architecture

```mermaid
graph TD
    Client[Browser / Healthcare Provider] -->|HTTP / React UI| Vite[Vite Dev / Nginx / Express Static]
    Client -->|/api/* Requests| Express[Node.js Express API Server - Port 5000]
    
    subgraph Express Backend
        Health[/api/health]
        ProductsAPI[/api/products & /api/products/:id]
        EnquiriesAPI[/api/enquiries - Validation & Ticket WB-XXXXX]
        CareersAPI[/api/careers/apply]
    end
    
    Express --> Health
    Express --> ProductsAPI
    Express --> EnquiriesAPI
    Express --> CareersAPI
    
    subgraph Data Stores
        ProductsStore[(products.js - 10 Core Formulations)]
        MemoryEnquiries[(Enquiries Register)]
    end
    
    ProductsAPI --> ProductsStore
    EnquiriesAPI --> MemoryEnquiries
```

---

## Project Structure

```text
WellBee/
├── public/                       # Static public assets
│   ├── robots.txt                # Search crawler instructions
│   └── sitemap.xml               # Search engine index sitemap
├── server/                       # Express REST API backend
│   ├── data/
│   │   └── products.js           # 10 core formulations dataset
│   └── index.js                  # Express application & endpoints
├── src/                          # React client application
│   ├── components/               # Modular UI components
│   │   ├── AboutSection.jsx      # Vision, Mission, and Core Values
│   │   ├── CareersModal.jsx      # Job application submission modal
│   │   ├── CareersSection.jsx    # Career opportunities showcase
│   │   ├── EnquiryForm.jsx       # Trade inquiry form with captcha
│   │   ├── Footer.jsx            # Regulatory footer & pharmacovigilance
│   │   ├── Header.jsx            # Sticky navbar & mobile slide drawer
│   │   ├── Hero.jsx              # Executive headline & batch preview card
│   │   ├── LegalModal.jsx        # Statutory compliance & privacy modal
│   │   ├── ProductCatalogue.jsx  # Search, filter pills & product cards
│   │   ├── ProductModal.jsx      # Technical specification monograph modal
│   │   ├── QualityManufacturing.jsx # QA/QC protocols & contract manufacturing
│   │   └── TherapeuticAreas.jsx  # 6 specialized clinical divisions
│   ├── App.jsx                   # Main application root & state management
│   ├── index.css                 # Comprehensive clinical design system
│   └── main.jsx                  # React DOM client entry point
├── .gitignore                    # Git exclusions
├── index.html                    # Root HTML5 template with Schema.org JSON-LD
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite configuration with /api proxy
```

---

## Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)
- **Git**: For version control

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Prithwiraj731/WellBee.git
cd WellBee
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Environment

Run both the Express backend (`http://localhost:5000`) and the Vite React frontend (`http://localhost:5173`) concurrently:

```bash
npm run dev
```

The application is now live at **[http://localhost:5173](http://localhost:5173)**. API calls made from the frontend to `/api/*` are automatically proxied to the Express backend on port `5000`.

---

## Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `concurrently "npm run dev:backend" "npm run dev:frontend"` | Starts both Express API and Vite dev server |
| `npm run dev:frontend` | `vite --port 5173` | Starts frontend development server only |
| `npm run dev:backend` | `node server/index.js` | Starts Node.js Express API server only |
| `npm run build` | `vite build` | Compiles and optimizes assets into `/dist` for production |
| `npm run preview` | `vite preview` | Locally preview the production build |
| `npm run start` | `node server/index.js` | Starts Express in production (serves `/dist` + `/api`) |

---

## API Reference

The backend operates on `http://localhost:5000` (or `PORT` environment variable).

### 1. System Health Check
- **Endpoint**: `GET /api/health`
- **Response**:
```json
{
  "status": "online",
  "timestamp": "2026-09-22T04:22:00.000Z",
  "service": "WellBee Pharmaceutical API"
}
```

### 2. Get All Products
- **Endpoint**: `GET /api/products`
- **Query Parameters**:
  - `category` *(optional)*: Filter by category (`gastro`, `respiratory`, `ortho`, `neuro`, `pediatric`, `all`)
  - `search` *(optional)*: Case-insensitive query against brand name, generic name, active ingredients, or indications
- **Response**:
```json
{
  "count": 10,
  "products": [
    {
      "id": "WB-GI-01",
      "brandName": "Pantowell-DSR",
      "genericName": "Pantoprazole Sodium IP & Domperidone IP Sustained Release Capsules",
      "category": "gastro",
      "categoryLabel": "Gastroenterology",
      "strength": "Pantoprazole 40 mg + Domperidone 30 mg",
      "packType": "Alu-Alu Blister (10 x 10)",
      "specialty": "GERD, Reflux Oesophagitis, Dyspepsia",
      "schedule": "Schedule H",
      "indications": ["Gastroesophageal Reflux Disease", "Erosive Esophagitis", "Non-Ulcer Dyspepsia"]
    }
  ]
}
```

### 3. Get Single Product
- **Endpoint**: `GET /api/products/:id`
- **Response**: Full technical monograph object or `404 Not Found`.

### 4. Submit Commercial Enquiry
- **Endpoint**: `POST /api/enquiries`
- **Payload**:
```json
{
  "enquiryType": "Distributor/Stockist",
  "name": "Dr. Rajesh Sharma",
  "organization": "Apollo Regional Health",
  "email": "procurement@apollohealth.org",
  "phone": "+91 98765 43210",
  "territory": "Maharashtra & Gujarat",
  "message": "Interested in primary distributorship for gastro and pediatric lines.",
  "captchaAnswer": "12"
}
```
- **Response** (`201 Created`):
```json
{
  "success": true,
  "message": "Business enquiry successfully registered with WellBee Commercial Desk.",
  "ticketId": "WB-64821",
  "receivedAt": "2026-09-22T04:25:00.000Z"
}
```

### 5. Submit Career Application
- **Endpoint**: `POST /api/careers/apply`
- **Payload**:
```json
{
  "position": "Quality Assurance Specialist (cGMP)",
  "name": "Aman Verma",
  "email": "aman.verma@email.com",
  "phone": "+91 98111 22334",
  "experience": "3-5",
  "message": "5 years of experience in Schedule M sterile injectable validation."
}
```
- **Response** (`201 Created`):
```json
{
  "success": true,
  "applicationId": "APP-4821",
  "message": "Application successfully received by Talent Acquisition."
}
```

---

## Production Deployment

### Option A: Unified Node.js Server (Single Container / VPS / Render / Railway)

1. Build the frontend client:
   ```bash
   npm run build
   ```
2. Start the Express server in production mode:
   ```bash
   NODE_ENV=production PORT=5000 npm run start
   ```
   *Express automatically serves the compiled `/dist` directory and routes all `/api/*` requests.*

### Option B: Docker Container

Create a `Dockerfile` in the root:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/public ./public
EXPOSE 5000
CMD ["node", "server/index.js"]
```

Build and run:
```bash
docker build -t wellbee-pharma .
docker run -p 5000:5000 -e PORT=5000 wellbee-pharma
```

---

## Regulatory Compliance & Pharmacovigilance

- **Schedule H Caution**: Formulations documented within this repository represent prescription pharmaceuticals under Indian Drugs and Cosmetics Rules. They may only be dispensed against a valid medical prescription from a registered medical practitioner.
- **cGMP / Schedule M**: Manufacturing protocols reference revised Schedule M (Good Manufacturing Practices) and WHO-GMP guidelines.
- **Pharmacovigilance Desk**: To report an adverse drug event (AE) or product quality complaint, email `pv@wellbeepharma.com` or call the toll-free safety desk at `1800-400-WELL`.

---

## License & Copyright

© 2026 WellBee Pharmaceutical Private Limited. All Rights Reserved.  
CIN: `U24239MH2024PTC490123`
