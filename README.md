<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Northbrand Collective

Welcome to the **Northbrand Collective** – the central repository for operational logic, tools, and visual journals. This project serves as a frontend engineering laboratory focused on React and TypeScript, emphasizing atomic components, accessible UI, and sub-second render times.

## Overview

The Northbrand Collective portal aggregates several domains of work:

- **Northbrand Aperture**: Precision optics, photography, and visual memory.
- **Military and VA Navigator**: Aviation-grade logistics and tracking for veterans navigating VA benefits.
- **Financials**: Strategic dashboard for identifying and neutralizing failure points in long-term financial planning.
- **JMATS**: Operational tracking system for military skill sets and transition logistics.
- **Northbrand Dev Lab**: High-availability frontend engineering research.
- **Journal**: Articles explaining the core principles driving Northbrand, such as "Limit Obligations" and "Prevent Error".

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Internal state-based dynamic routing

## Running Locally

**Prerequisites:**  
- [Node.js](https://nodejs.org/) installed on your machine.

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   If applicable, set up your Gemini API integration by adding a `.env.local` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Development Principles

At Northbrand, we follow these core principles in our code DNA, just as in photography:
- **Prevent Error**: Design systems that avoid failure states.
- **Limit Obligations**: Remove bloat from the codebase to focus on core utility.
- **System Integrity**: Ensure every component has a purpose and operates smoothly.
