LAUNDRY BOOKING — LOCALHOST PROJECT

RUN WITH THE BATCH FILE
1. Extract this ZIP file.
2. Open the extracted Laundry_Booking_Localhost folder.
3. Double-click run_localhost.bat from File Explorer.
   It opens a separate server window and launches the website.
4. Keep the "Laundry Booking Server" command window open.
5. Open http://127.0.0.1:8000/ if the browser does not open automatically.

IMPORTANT
- Do not run run_localhost.bat using the VS Code Code Runner "Run Code" button.
  Run it by double-clicking the .bat file, or start the server in a real VS Code terminal.
- If port 8000 is already occupied, close any old server window first.
  If necessary, use Task Manager to close the previous Python http.server process.
- To run with VS Code Live Server instead: install the Live Server extension,
  open index.html, right-click, and choose "Open with Live Server".
  In that case the URL will usually be http://127.0.0.1:5500/index.html.

FILES
index.html — web page
style.css — UI styling
app.js — six-screen navigation, icons and interactions
data.json — clothing and service data
run_localhost.bat — starts the local server in a separate command window

This is a front-end prototype; no real booking database or live notification service is connected.
