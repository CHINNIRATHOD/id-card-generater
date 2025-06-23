# 📇 ID Card Generator — Full-Stack Web App

Generate professional ID cards in seconds: fill in a form, upload a photo, and get an instant on-screen preview.  
User details + photo filenames are stored in MongoDB for easy retrieval and future editing.

---

## ✨ Key Features
| Category | Details |
|----------|---------|
|🖥 Frontend|• Responsive HTML/CSS form<br>• Live ID-card preview with uploaded photo|
|⚙️ Backend |• Node.js + Express REST API<br>• `multer` file-upload middleware<br>• Optional image optimisation with `sharp`|
|🗄 Database|• MongoDB (Mongoose models)<br>• Stores user data **and** photo filename|
|🖼 Image Handling|• Images saved to `/uploads` folder (local) or Cloudinary (optional)<br>• Filename stored in DB; served at `/uploads/<filename>`|
|🚀 Deployment|• Frontend → GitHub Pages<br>• Backend → Render.com (free tier)<br>• Database → MongoDB Atlas (free shared cluster)|

---

## 🏗 Tech Stack
- **Frontend:** HTML · CSS · Vanilla JS (Fetch API)
- **Backend:** Node.js 18+ · Express · Multer · (optional Sharp)
- **Database:** MongoDB · Mongoose
- **Dev Ops:** Git · GitHub · VS Code

---

## 📂 Folder Structure
id-card-generator/
├── client/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── server/
│ ├── models/
│ │ └── User.js
│ ├── server.js
│ ├── uploads/ # auto-created by multer
│ └── package.json
└── README.md



---

## ⚡ Local Setup

```bash
# 1  Clone repo
git clone https://github.com/<your-user>/id-card-generator.git
cd id-card-generator

# 2  Install backend deps
cd server
npm install         # express, mongoose, multer, (sharp)

# 3  Run MongoDB locally (Community Server or Docker)
#    Default port 27017
mongod

# 4  Start backend
node server.js      # http://localhost:3000

# 5  Open frontend
cd ../client
start index.html    # or use Live Server extension
