# 📌 Pipedrive Deal Form

This project is a web application that allows users to create new deals in [Pipedrive](https://www.pipedrive.com/) through a custom form. It integrates with the Pipedrive API, supports dynamic loading of custom fields, form validation, and shows a confirmation message upon successful submission.

---

## 📚 Table of Contents

- [📌 Pipedrive Deal Form](#-pipedrive-deal-form)
- [🚀 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Setup & Run](#-setup--run)
- [📝 Features](#-features)
- [🔐 Pipedrive OAuth Manual Authorization](#pipedrive-oauth-manual-authorization)
   - [1. Get the Authorization Code](#1-get-the-authorization-code)
   - [2. Exchange the Code for a Token](#2-exchange-the-code-for-a-token)
---

## 🚀 Tech Stack

- **React** + **TypeScript**
- **Vite** — Project bundler
- **React Hook Form** — Form state management
- **Pipedrive API** — Deal creation and field fetching
- **CSS** — Custom styling and layout
- **ESLint** — Linting and code quality
- **Prettier** — Code formatting

---

## 📁 Project Structure

```
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   └── vite-env.d.ts
├── .env.local
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
└── README.md
```

## Authentication

During development, you can authorize manually via terminal using Pipedrive’s OAuth.  
See [Manual OAuth Guide](#pipedrive-oauth--manual-authorization-via-terminal) below.

---

## ⚙️ Setup & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pipedrive-test.git

# 2. Install dependencies
npm install

# 3. Create env file
mv .env.example .env.local

# 4. Open `.env.local` and insert your Pipedrive API token:
VITE_PIPEDRIVE_API_TOKEN=your_token

# 5. [Authorize manually](#pipedrive-oauth--manual-authorization-via-terminal) or configure SDK init

# 6. Start development server
npm run dev
```

To test locally without Pipedrive SDK, temporarily bypass SDK initialization logic.

---

## 📝 Features

- ✅ Loads custom deal fields from Pipedrive API
- ✅ Form validation with error messages
- ✅ Deal submission via API
- ✅ Shows success message and deal link
- ✅ Designed for embedding (iframe/SDK support)

---

## Pipedrive OAuth Manual Authorization

Use **your system terminal** (PowerShell / bash), **not** browser DevTools.

#### 1. Get the Authorization Code

1. In your Pipedrive app specify this **Redirect URI**:
   ```
   https://pipedrive-test.netlify.app
   ```
2. Open this URL in your browser (replace with your values):
   ```
   https://oauth.pipedrive.com/oauth/authorize?client_id=bc2e15e399e1cbda&redirect_uri=https://pipedrive-test.netlify.app&response_type=code&state=xyz
   ```
3. After logging in, you’ll be redirected to:
   ```
   https://pipedrive-test.netlify.app?code=<AUTH_CODE>&state=xyz
   ```
   — copy the `code` value (this will be `<AUTH_CODE>`).

#### 2. Exchange the Code for a Token

- **PowerShell (Windows)**:
  ```powershell
  $headers = @{ "Content-Type" = "application/x-www-form-urlencoded" }
  $body = "grant_type=authorization_code&code=<AUTH_CODE>&redirect_uri=https://pipedrive-test.netlify.app&client_id=bc2e15e399e1cbda&client_secret=b2f02f6c62aff73e08dfc545c4882a542af68b37"
  irm -Method Post -Uri "https://oauth.pipedrive.com/oauth/token" -Headers $headers -Body $body
  ```

- **cURL (macOS/Linux/WSL)**:
  ```bash
  curl -X POST https://oauth.pipedrive.com/oauth/token     -H "Content-Type: application/x-www-form-urlencoded"     -d "grant_type=authorization_code"     -d "code=<AUTH_CODE>"     -d "redirect_uri=https://pipedrive-test.netlify.app"     -d "client_id=bc2e15e399e1cbda"     -d "client_secret=b2f02f6c62aff73e08dfc545c4882a542af68b37"
  ```

You will receive a JSON with `access_token`, `refresh_token`, and `expires_in`. Store them securely.

#### 3. Refresh the Token

- **PowerShell**:
  ```powershell
  $headers = @{ "Content-Type" = "application/x-www-form-urlencoded" }
  $body = "grant_type=refresh_token&refresh_token=<REFRESH_TOKEN>&client_id=bc2e15e399e1cbda&client_secret=b2f02f6c62aff73e08dfc545c4882a542af68b37"
  irm -Method Post -Uri "https://oauth.pipedrive.com/oauth/token" -Headers $headers -Body $body
  ```

- **cURL**:
  ```bash
  curl -X POST https://oauth.pipedrive.com/oauth/token     -H "Content-Type: application/x-www-form-urlencoded"     -d "grant_type=refresh_token"     -d "refresh_token=<REFRESH_TOKEN>"     -d "client_id=bc2e15e399e1cbda"     -d "client_secret=b2f02f6c62aff73e08dfc545c4882a542af68b37"
  ```
