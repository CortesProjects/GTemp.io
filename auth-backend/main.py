from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


url = "https://ozydpgdekyabygpfetnv.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eWRwZ2Rla3lhYnlncGZldG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MTgxMTEsImV4cCI6MjA3Mzk5NDExMX0.UfvAeMjZ1SCrtfCw5VSXFy1tDbLeVaRSRRTAJyfQgnM"
supabase = create_client(url, key)

class Register(BaseModel):
    username: str
    email: str
    password: str

class Login(BaseModel):
    username: str
    password: str

@app.post("/register")
def register(user: Register):
    # check if username exists
    existing = supabase.table("users").select("*").eq("username", user.username).execute()
    if existing.data:
        raise HTTPException(status_code=400, detail="Username already exists")
    supabase.table("users").insert({
        "username": user.username,
        "email": user.email,
        "password": user.password  # ⚠️ later: hash this!
    }).execute()
    return {"message": "User registered successfully"}

@app.post("/login")
def login(user: Login):
    result = supabase.table("users").select("*").eq("username", user.username).eq("password", user.password).execute()
    if not result.data:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Login successful"}
