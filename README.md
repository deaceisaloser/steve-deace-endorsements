# Steve Deace Endorsement Record & Candidate Loss Tracker

An interactive web application and political analysis archive tracking the endorsement record of conservative political commentator Steve Deace from 2008 through 2026. The database documents candidate performance, electoral outcomes, vote margins, and primary vs. general election results.

## 📊 Overview

- **Track Record Analyzed:** 16 High-Profile Endorsements (2008–2026)
- **Candidate Defeat Rate:** 68.8% (11 Defeats vs. 5 Victories)
- **Key Criterion:** A win is counted only when the endorsed candidate successfully captures the targeted office.

## ✨ Features

- **Key Metrics Dashboard:** Dynamic summary of candidate defeat rates, total victories, and total losses.
- **Search & Filtering:**
  - Real-time search across candidate names, states, races, and opponents.
  - Outcome filters (All Endorsements, Defeats Only, Wins Only).
  - Office level filtering (Presidential, U.S. Senate, U.S. House, Governor, State Legislature).
  - Multi-attribute sorting (Most Recent, Defeats First, Oldest First, Alphabetical).
- **View Modes:** Toggle between a responsive **Grid View** and a chronological **Timeline View**.
- **Detailed Candidate Modals:** Comprehensive breakdown per race, including Deace quotes with direct source links, vote percentages, margins, and historical context.
- **Zero Dependencies:** Fast, lightweight, pure vanilla web architecture.

## 📁 Repository Structure

```
deace-losses/
├── index.html   # Main HTML markup, filter controls, dashboard UI, and modal container
├── styles.css   # Modern CSS layout, custom properties, responsive grid, and component styles
└── app.js       # Candidate dataset, filter/search logic, view rendering, and modal handlers
```

## 🚀 Getting Started

Since this project is built using standard web technologies with no external build tools or framework dependencies, running it locally is simple:

### Option 1: Direct File Opening
Open `index.html` directly in any modern web browser.

### Option 2: Local Web Server
Serve the repository using your preferred local development server:

**Using Python 3:**
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

## 🛠️ Data Sources & Methodology

All election metrics, vote totals, and endorsement quotes are compiled from official state election archives, Federal Election Commission (FEC) filings, historical caucus reports, and primary press releases.
