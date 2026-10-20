@echo off
setlocal
cd /d "%~dp0"
title Laundry Booking Localhost Launcher

echo.
echo ==========================================
echo       LAUNDRY BOOKING - LOCALHOST
echo ==========================================
echo.
echo Starting the local web server on port 8000...
echo Keep the server window open while using the app.
echo.

where py >nul 2>nul
if %errorlevel%==0 (
    start "Laundry Booking Server" cmd /k "cd /d ""%~dp0"" && py -m http.server 8000 --bind 127.0.0.1"
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        start "Laundry Booking Server" cmd /k "cd /d ""%~dp0"" && python -m http.server 8000 --bind 127.0.0.1"
    ) else (
        echo ERROR: Python was not found.
        echo Install Python, then run this file again.
        pause
        exit /b 1
    )
)

timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8000/"
echo.
echo The website should open in your browser.
echo If the page shows ERR_EMPTY_RESPONSE, port 8000 may already be occupied.
echo Close any old Laundry Booking server windows and try again.
echo.
endlocal
