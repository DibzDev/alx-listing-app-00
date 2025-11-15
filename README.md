# ALX Listing App - Milestone 2: Responsive Property Listing Page

A responsive property listing application built with Next.js, TypeScript, and Tailwind CSS that displays luxury properties with filtering capabilities.

## 🚀 Milestone 2 Features

### ✅ Completed Requirements

#### Layout Components
- **Header** - Navigation bar with logo, search functionality, and accommodation types
- **Footer** - Comprehensive footer with links and contact information
- **Layout** - Wrapper component for consistent page structure across the application

#### Home Page Sections
- **Hero Section** - Eye-catching banner with background image and call-to-action text
- **Filter Section** - Interactive filter pills for property categories
- **Property Listing Grid** - Responsive grid displaying all properties from sample data

#### Property Cards
Each card displays:
- Property image with discount badges
- Property name and location
- Star rating
- Property categories/tags
- Pricing information
- Bed/bathroom/occupant details

#### Technical Implementation
- **TypeScript Interfaces** - Properly typed property data structure
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component Architecture** - Modular and reusable components
- **Dynamic Data Rendering** - Properties mapped from sample data array

## 🛠 Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Structure**: Functional Components with TypeScript

## 📁 Project Structure
alx-listing-app-00/
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ └── Layout.tsx
│ ├── Pill.tsx
│ └── PropertyCard.tsx
├── constants/
│ └── index.ts
├── interfaces/
│ └── index.ts
├── pages/
│ ├── _app.tsx
│ └── index.tsx
├── public/
│ └── assets/
└── styles/
└── globals.css

## 🎯 Key Components

### Layout Components
- `Layout.tsx` - Main layout wrapper
- `Header.tsx` - Navigation with search and auth buttons
- `Footer.tsx` - Site links and information

### Page Components
- `index.tsx` - Home page with hero, filters, and property listings

### UI Components
- `PropertyCard.tsx` - Individual property display card
- `Pill.tsx` - Filter pill component

### Data Management
- `interfaces/index.ts` - TypeScript interfaces for type safety
- `constants/index.ts` - Sample property data array

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)

## 🎨 Features Implemented

### Hero Section
- Full-width background image
- Overlay for better text readability
- Responsive typography

### Filter System
- Clickable filter pills
- Visual active state indication
- Horizontal scrolling on mobile

### Property Grid
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects on cards
- Discount badges for special offers
- Category tags for easy scanning

### Property Information
- High-quality property images
- Location details (city, state, country)
- Star ratings
- Pricing with currency formatting
- Amenity and capacity details

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DibzDev/alx-listing-app-00.git
   cd alx-listing-app-00
