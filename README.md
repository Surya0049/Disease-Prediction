# Disease Prediction System

A multi-user disease prediction system built with Flask, SQLite, HTML, CSS, and JavaScript. It includes a modern login screen with live date/time and background switching, admin controls for users and datasets, and a prediction workflow with medicine lookup.

## Features

- Beautiful login page with background switcher and live date/time.
- Role-based access (admin vs user).
- Admin can add, modify, delete users and reset passwords.
- Admin can upload datasets (CSV, XLSX) or create entries manually.
- Admin can edit dataset records and change global page backgrounds.
- Prediction page with age, sex, symptoms selection, and results.
- Built-in Google search link for prescribed medicines.
- Home, back, and logout buttons on every page.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open `http://localhost:5000` in your browser.

## Default Admin Credentials

- Username: `admin`
- Password: `admin123`

## Dataset Format

CSV/XLSX headers:

```
disease,symptoms,medicine,dose,notes
```

Symptoms should be comma-separated (example: `fever,cough,headache`).

## Future Enhancements (Recommended)

- Integrate an ML model for improved prediction.
- Add patient history and downloadable reports.
- Role-based clinic assignments and regional datasets.
- API endpoints for mobile apps and hardware devices.
