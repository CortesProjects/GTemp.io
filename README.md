<img width="2542" height="706" alt="image" src="https://github.com/user-attachments/assets/c6c23594-883d-44a3-8033-36c96155a7f6" /># GTemp.io
A Marketplace of Game Templates for Roblox Studios, Unity, and Godot engine

i want to make a log in and registration page: py(backend), .jsx(frontend), supabase(database) 
1. register new account and send to database, next. [username, email, password, repeat password] 
2. check account if exists and matches credentials from database when logging in. [username, password] 

in my Gtemp.io folder show me visualization what is inside this folder look like. guide me what to do first, step 1 - step...: what is first 
type this command first? or 
create this file and paste contents on this file first?

i dont like create-react-app, i want vite@latest

repository/
│
├── backend/                # Python backend (FastAPI/Flask)
│   ├── venv/               # Python virtual environment
│   ├── main.py             # Backend entry (API routes: register/login)
│   └── requirements.txt    # remain it empty, it may have text later after intalling Python dependencies
│
├── frontend/               # React frontend (Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── pages/
│           ├── Login.jsx
│           └── Register.jsx
└── README.md               # Notes/documentation

# create folder repository and go inside
cd repository
# create folder
mkdir [foldername] && cd [foldername] #auth-backend inside repository
# inside auth-backend folder, create folder for backend, then activate venv
python -m venv [foldername] #similar to npm create vite@latest [foldername]
venv\Scripts\activate      # (Windows)
# paste on activate venv instance: (venv) C:\Users\yourname\repository\auth-backend>
pip install fastapi uvicorn supabase
pip freeze > requirements.txt
# lets create main.py that has the url and key of our supabase to direct us to our web page, then paste our url and key of our supabase
(venv) C:\Users\yourname\repository\auth-backend>code .    #create main.py program that has url and key or our supabase
C:\Users\yourname\repository\auth-backend>code .           #it doesn't matter if venv is activated or not
# lets run activated backend to connect with supabase
uvicorn main:app --reload
## Setup Supabase Database
# open new terminal or ctrl + c: objective go back to C:\Users\yourname\repository\
cd gtemp.io or cd c..
# create foldder for frontend
npm create vite@latest [foldername] //auth-frontend
# install dependencies
npm install axios
# install package
npm install react-router-dom
# go to old terminal which we are running backend
crtl + c                     #to stop running
# install CORS dependencies
pip install fastapi[all]
pip install starlette
# add at the very top of main.py
from fastapi.middleware.cors import CORSMiddleware
# add right after app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# run the backend
uvicorn main:app --reload

# SUMMARY

# back-end
# create backend folder + venv
mkdir auth-backend && cd auth-backend
python -m venv venv
venv\Scripts\activate        # (Windows)
# install backend deps
pip install fastapi uvicorn supabase starlette
pip freeze > requirements.txt
# run backend
uvicorn main:app --reload

# front-end
# create frontend with Vite
cd ..
npm create vite@latest auth-frontend
cd auth-frontend
# install frontend deps
npm install axios react-router-dom
# run frontend
npm run dev

main.py must have
url                                                         # to connect to database "which destination you should go after passing a bridge of API"
key                                                         # to connect to API of supabase "serve as a bridge before reaching destination"
from fastapi.middleware.cors import CORSMiddleware          #library for add_middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],                # call frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



