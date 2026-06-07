# Korean AI Academy

Full-stack language learning web app built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB.

Requirements:
- Node.js >= 16
- MongoDB running locally or a MongoDB Atlas URI

Quick start (two terminals):

1. Backend

```bash
cd korean-ai-academy/server
npm install
# set environment variables in .env or rely on defaults
npm run dev
```

2. Frontend

```bash
cd korean-ai-academy/client
npm install
npm run dev
```

Default server: http://localhost:5000
Default client: http://localhost:5173

Environment variables (server/.env):
- MONGODB_URI (optional) - defaults to `mongodb://127.0.0.1:27017/korean-ai-academy`
- JWT_SECRET (optional) - defaults to a built-in secret (change for production)

Deployment notes

- Vercel (frontend): The `client` folder contains `vercel.json`. Vercel will run `npm run build` (or `vercel-build`) and publish the `dist` folder.
- Render (backend): A sample `render.yaml` is included at the repo root for creating a web service. The server uses `Procfile` and `npm start` to run.

MongoDB Atlas

1. Create a free cluster in MongoDB Atlas.
2. Create a database user and password.
3. Whitelist the IPs or use 0.0.0.0/0 for testing (not recommended for production).
4. Obtain your connection string, then update `server/.env` with:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/korean-ai-academy?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
PRODUCTION_CLIENT_URL=https://your-frontend-domain
CLIENT_URL=http://localhost:5173
PORT=5000
```

GitHub + Deploy

- Connect your frontend (`client`) to Vercel by importing the GitHub repo and setting `VITE_API_URL` to `https://your-backend-url/api`.
- Connect your backend to Render by creating a new Web Service and either using `render.yaml` or setting the build/start commands to `npm install` and `npm start`. Add environment variables in Render for `MONGODB_URI`, `JWT_SECRET`, and `PRODUCTION_CLIENT_URL`.

