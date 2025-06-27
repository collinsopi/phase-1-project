
Aurora Autohaus

A Luxury Car Dealership Web Application


Description

Aurora Autohaus is a single-page frontend web application that allows users to view, explore, and reserve luxury cars. Built using HTML, CSS, and Javascript, the app dynamically fetches data from a local JSON server (`db.json`) and displays a fleet of high-end vehicles.


Features

- Dynamic background image with smooth transitions.
- Interactive sidebar listing all available car models.
- Displays car images and detailed specifications.
- Shows car pricing in the details section.
- Reserve button with user feedback (alert confirmation).
- Keyboard interaction: Press `Escape` to clear the current car selection.
- Stylish UI with hover effects, active selections, and smooth transitions.
- Fully single-page application (no reloads or redirects).


File Structure

/aurora-autohaus
├── index.html         # Main webpage
├── style.css          # Styling file
├── script.js          # JavaScript functionality
├── db.json            # JSON Server data
└── images/            # Images folder


Technologies used
- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON Server (`json-server`)


Event Listeners Implemented

Event: `click`
target: Sidebar car list items, Reserve button
Functionality: Select car, reserve a car

Event: `mouseover`/`mouseout`
Target: Reserve button
Functionality: Change button color on hover

Event: `keydown`
Target: Document (`Escape` key)
Functionality: Clear car selection and UI


Future Improvements
- Add search or filter functionality (by price, brand, or year).
- Allow adding new cars via a form.
- Implement a favorites/wishlist feature.
- Enhance responsiveness for mobile devices.
- Store reservations in localStorage or backend.


Author
Collins Opiayo
Aurora Autohaus | 2025


License
This project is for educational purposes.
Feel free to use, modify, and improve.

## Drive Prestige. Experience Excellence.