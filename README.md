# Disease Prediction System

A multi-user disease prediction system built with Flask, SQLite, HTML, CSS, and JavaScript. It includes a modern login screen with live date/time and background switching, admin controls for users and datasets, and a prediction workflow with medicine lookup.

## Features

- Beautiful login page with background switcher and live date/time.
- Role-based access (admin vs user).
- Admin can add, modify, delete users and reset passwords.
- Admin can upload datasets (CSV, XLSX) or create entries manually.
- Admin can edit dataset records and change global page backgrounds.
- Admin can back up or restore the database.
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

CSV/XLSX headers (standard format):

```
disease,symptoms,medicine,dose,accuracy,notes
```

Symptoms should be comma-separated (example: `fever,cough,headache`).

### Binary Dataset Format

If your dataset uses binary symptom columns (0/1), the system can import files with:

1. **Column 1**: Serial number (ignored).
2. **Columns 2–31**: Symptom flags in the order below.
3. **Column 32**: Result (disease).
4. **Column 33**: Dose (optional).
5. **Column 34**: Accuracy (optional).

Symptom order expected:

```
itching, skin_rash, nodal_skin_eruptions, continuous_sneezing, shivering, chills, stomach_pain,
ulcers_on_tongue, vomiting, cough, chest_pain, yellowish_skin, loss_of_appetite, abdominal_pain,
yellow_urine, weight_loss, restlessness, irregular_sugar_level, excessive_hunger, increased_appetite,
high_fever, headache, diarrhoea, muscle_pain, red_spots_over_body, runny_nose, breathlessness,
fast_heart_rate, dark_urine
```

## Future Enhancements (Recommended)

- Integrate an ML model for improved prediction.
- Add patient history and downloadable reports.
- Role-based clinic assignments and regional datasets.
- API endpoints for mobile apps and hardware devices.
