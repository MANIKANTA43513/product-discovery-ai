📦 Product Discovery AI
An AI-powered product discovery web application that allows users to search products and receive intelligent recommendations based on their query.
This project includes:
React Frontend
Node.js + Express Backend
REST APIs
AI-based recommendation logic
Deployment (Frontend: Vercel, Backend: Render)
🚀 Live Demo
Frontend (Vercel):
👉 https://ai-product-navigator.vercel.app/
Backend (Render):
👉 https://product-discovery-ai-rz6i.onrender.com/api/products
🏗️ Tech Stack
Frontend
React.js
Fetch API
Functional Components
Clean component structure
Backend
Node.js
Express.js
REST APIs
CORS enabled
JSON-based product database
📁 Project Structure
Copy code

product-discovery-ai/
│
├── backend/
│   ├── data/products.json
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AskBox.js
│   │   │   ├── ProductCard.js
│   │   │   └── ProductList.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
🔌 API Endpoints
1️⃣ Get All Products
GET
Copy code

/api/products
Response:
JSON
Copy code
[
  {
    "id": "p001",
    "name": "Acer Aspire 5",
    "category": "Laptop",
    "price": 550,
    "description": "Affordable laptop",
    "tags": ["budget"]
  }
]
2️⃣ AI Recommendation Endpoint
POST
Copy code

/api/ask
Request Body:
JSON
Copy code
{
  "query": "budget laptop"
}
Response:
JSON
Copy code
{
  "summary": "Showing products based on your query.",
  "products": [...]
}
The AI logic filters and matches products based on:
Tags
Category
Query keywords
🧠 How AI Works
User enters a search query.
Backend processes query.
Intelligent matching logic filters relevant products.
Response includes:
AI summary
Matching products
This simulates an AI-powered recommendation system using structured filtering logic.
⚙️ Local Setup
Backend Setup
Copy code

cd backend
npm install
npm start
Runs on:
Copy code

http://localhost:5000
Frontend Setup
Copy code

cd frontend
npm install
npm start
Runs on:
Copy code

http://localhost:3000
🌍 Deployment
Backend
Hosted on Render
Environment ready
Public API accessible
Frontend
Hosted on Vercel
Connected to deployed backend API
✅ Features
✔ Product listing
✔ AI-powered product search
✔ Clean UI
✔ Modular component structure
✔ RESTful API design
✔ Production deployment
📌 Assignment Requirements Coverage
This project includes:
Frontend application
Backend REST APIs
AI-based recommendation feature
Proper project structure
Deployment links
README documentation
All assignment requirements have been implemented.
👨‍💻 Author
Developed as part of a Product Discovery AI assignment submission.
