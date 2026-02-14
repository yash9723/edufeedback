# Database Migration Guide

Since the AI agent cannot connect directly to your Supabase database due to network restrictions, you need to run the migration commands manually.

## Prerequisites

1.  Ensure you have **Node.js** installed.
2.  Ensure you are in the project root directory.

## Option 1: The One-Click Script (Recommended)

1.  Open your file explorer to the `server` folder.
2.  Double-click the `setup_db.bat` file.
    *   This script will connect to Supabase, create the tables, and add test data.
    *   If it closes immediately, try running it from a terminal (see below).

## Option 2: Manual Terminal Commands

If the script doesn't work, follow these steps in your **VS Code Terminal**:

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Install dependencies (just in case):**
    ```bash
    npm install
    ```

3.  **Run the Migration:**
    This creates the tables in your Supabase database.
    ```bash
    npx prisma migrate dev --name init_supabase
    ```
    *   If it asks to reset the database, say **yes** (y).

4.  **Seed the Database:**
    This adds the initial test users (student, admin, etc.).
    ```bash
    npm run seed
    ```

## Verify Success

1.  Go to your **Supabase Dashboard** -> **Table Editor**.
2.  You should see tables like `User`, `Issue`, `Comment`.
3.  Check the `User` table; it should have rows for `alice@edu.com`, `admin@edu.com`, etc.

## Troubleshooting

-   **Connection Error?**
    Check your `.env` file in the `server` folder. Ensure `DATABASE_URL` is correct and the password is right.
    Current Config: `postgresql://postgres:Yash9797%40123@db.cujtvesppoaibwohhbot.supabase.co:5432/postgres`

-   **"Command not found"?**
    Make sure you ran `npm install` in the `server` folder first.
