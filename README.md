# S67_Capstone_Tripzy

## Tripzy — Plan the Ideal Trip Within Your Budget!
Tripzy is a full-stack travel planning web app that helps users plan unforgettable trips while staying within their budget. Users input their total trip budget, and the app recommends destinations, accommodations, meals, and activities tailored to that budget. It also includes a live expense tracker, a weather-based packing list, smart suggestions, user authentication, and photo uploads.
 
 ## backend deployment - "https://s67-shally-capstone-tripzy.onrender.com"
 ## frontend deployment- "https://capstonetripzy-30.vercel.app/"

backend deployment - "https://s67-shally-capstone-tripzy.onrender.com"

## 🎯 Project Goal
The goal of Tripzy is to make travel planning accessible, stress-free, and cost-effective for every type of traveler. By combining personalized recommendations with real-time financial tracking and intelligent budget management, Tripzy empowers users to:

- Plan trips that fit within their unique financial constraints.
- Make informed decisions based on weather, location, and spending habits.
- Stay organized and avoid overspending with built-in tools and alerts.
- Manage their trips through an intuitive and user-friendly interface.

Whether you're a backpacker looking for adventure on a shoestring or a family planning a relaxing holiday, Tripzy ensures you enjoy every moment without breaking the bank.

## 🧾 What is Tripzy?
Tripzy is a smart, budget-based travel planner designed to help you make the most of your travel experience without overspending. Whether you're planning a solo trip, a family vacation, or a backpacking adventure, Tripzy makes sure every penny is well spent.

With just your budget as input, the app breaks it down into spending categories and recommends:
- Ideal destinations
- Affordable stays
- Local dining options
- Activities and experiences within your price range

## 💡 Why Use Tripzy?

### ✅ Personalized Travel Recommendations
You provide the budget, and Tripzy offers complete itineraries customized to your financial limit.

### ✅ Live Expense Tracking
Log daily spending and keep an eye on how much you’re spending in real time — broken down by category.

### ✅ Smart Budget Adjustments
Tripzy suggests cheaper alternatives if you're about to go over budget. Your plan adjusts dynamically as you travel.

### ✅ Weather-Based Packing List
Pack smart! Get a list of items tailored to the actual weather forecast of your destination.

### ✅ Secure and Flexible Login
Sign up with email/password or log in using Google for quick access.

### ✅ Photo & Profile Uploads
Upload profile pictures or snap and save trip photos to relive your experiences later.

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- React Router DOM
- Tailwind CSS (optional)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose

**Other Tools:**
- Multer (file uploads)
- JWT (auth)
- Bcrypt (password hashing)
- Weather API (packing list)

**Deployment:**
- Frontend: Vercel
- Backend: Render

## Phase 1: Ideation & Design (Days 1–5)
## Day 1: Project Setup & Repository Initialization
Set up GitHub repository with branch rules and PR templates.
Create folder structure:
client/ – React app
server/ – Express backend
Add README with:
Overview
Tech stack
Setup instructions
Contribution guidelines
Set up GitHub Projects or use Notion/Trello for task tracking.

## Day 2: User Flow, Personas, and Feature Mapping
Create user personas: budget solo traveler, family planner, etc.
Define core user journeys (e.g., sign-up → enter budget → get plan).
List MVP features vs enhancements.
Map out screens needed for MVP:
Auth, Budget input, Recommendation results, Expense tracker, Trip summary.

## Day 3: Low-Fidelity Wireframes
Use Excalidraw/Figma to sketch rough layout:
Landing page
Budget input screen
Dashboard (recommendations + expense tracker)
Trip details
Packing list
Validate user flow and layout simplicity.

## Day 4: High-Fidelity UI Design
Start Figma file for design system:
Colors, typography, spacing, iconography
Design reusable UI components:
Cards, buttons, forms, inputs, modals
Create screen-by-screen mockups for both desktop and mobile.

## Day 5: Technical Architecture
Finalize stack: React (Vite), Node.js (Express), MongoDB (Mongoose), Tailwind CSS, JWT, Multer, Weather & Recommendation APIs.
Plan backend folder structure:
routes/, controllers/, models/, middleware/, services/
Plan frontend architecture:
Pages, Components, Hooks, API utils, Context/Zustand

## Phase 2: Backend Development (Days 6–11)
## Day 6: Backend Boilerplate Setup
Initialize Express project with:
cors, dotenv, helmet, morgan
Create routes for /auth, /trips, /expenses, /recommendations
Add basic health check route

## Day 7: MongoDB & Mongoose Schema Design
Set up MongoDB Atlas + connect to Express
Create Mongoose schemas:
User: email, password, OAuth flag, profile pic
Trip: userId, budget, destination, dates
Expense: tripId, category, amount, notes
Recommendation: type, destination, cost

## Day 8: Local Auth with JWT
Use bcryptjs to hash passwords
Add JWT-based login/signup routes
Protect trip/expense routes with authMiddleware.js
Test token generation and decode flow

## Day 9: Google OAuth Integration
Integrate Google OAuth using passport.js or Firebase Auth
Store user profile & token securely
Redirect to dashboard after login

## Day 10: Core API Endpoints
Build and test:
POST /trips → Create a new trip
GET /trips/:id → View trip details
POST /expenses → Add expense to a trip
PUT /expenses/:id → Edit expense
DELETE /expenses/:id → Remove expense

## Day 11: External API Integration
Integrate:
Weather API (OpenWeather or WeatherAPI)
Mock/Placeholder Recommendation API (optional: build later with AI or dataset)
Create packing list logic based on temperature + trip duration

## Phase 3: Frontend Development (Days 12–18)
## Day 12: React + Vite Setup
Initialize project, configure Tailwind CSS
Add routing with React Router
Create folder structure: pages/, components/, hooks/, context/, assets/

## Day 13: Authentication UI + Global State
Create login/signup screens with form validation (React Hook Form + Zod/Yup)
Store JWT token in Context or Zustand
Protect routes with PrivateRoute logic

## Day 14: Budget Input Page
UI form to enter:
Total budget
Travel dates
Traveler preferences (solo, couple, family)
On submit → call API and navigate to recommendations

## Day 15: Recommendations UI
Display recommendations as cards:
Destination image, budget summary, estimated cost breakdown
Add filters: region, interest (beach, nature, city)
Show total vs remaining budget

## Day 16: Expense Tracker UI
Add expense table with:
Category, amount, date, notes
Calculate total spent and update remaining budget
Add editing + deleting functionality

## Day 17: File Uploads + Profile Management
Add Multer on backend for handling uploads
UI to upload:
Profile photo
Trip images
Store image URLs in MongoDB

## Day 18: Smart Adjustments UI
If user overspends:
Highlight overages visually (red bar or icon)
Show alert with cheaper alternatives
Recalculate remaining trip plan

## Phase 4: Integration & Testing (Days 19–25)
## Day 19: Full Integration
Connect all frontend components to backend
Test:
Budget input → recommendation fetch
Create/edit trip
Expense logging & syncing with DB

## Day 20: Dynamic Weather Packing List
On trip page:
Fetch weather forecast by destination
Generate items: raincoat, sunscreen, thermals, etc.
UI: Checklist with toggles

## Day 21: Responsive Design
Use Tailwind's responsive classes
Test on iPhone, Android, tablets, laptops
Improve mobile nav, spacing, stacking

## Day 22: Finalize Auth Flow
Ensure token storage, refresh logic (optional)
Fix redirect after login/signup
UI: user avatar dropdown for logout

## Day 23: Bug Fixing & Testing
Manual testing:
Create account → plan trip → track expenses
Try uploading files, triggering errors
Optional: Add unit tests with Jest

## Day 24: Deployment
Frontend → Vercel
Backend → Render
Set up .env, CORS, error boundaries, and deployment scripts

## Day 25: Final Testing
Live testing with real users (you or friends)
Track any crashes, bugs, UX feedback
Fix before launch
