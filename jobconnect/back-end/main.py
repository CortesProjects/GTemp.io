from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from postgrest.exceptions import APIError

from supabase import create_client, Client
import os

# ---- Supabase connection ----
SUPABASE_URL = "https://fzqecsoilemqbrelcyjj.supabase.co"   # Replace with your Supabase project URL
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cWVjc29pbGVtcWJyZWxjeWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1OTM2MzUsImV4cCI6MjA3NDE2OTYzNX0.uMGngLoTqkG9bmz6ZLrkxzB08Fa3mHWY6WcPnyp_JQE"  # Replace with your Supabase API key

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ---- FastAPI app ----
app = FastAPI()

# Allow requests from frontend (React / Vite on localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Routes ----
@app.get("/")
def root():
    return {"message": "Auth Backend running!"}

@app.post("/register")
def register_user(username: str, email: str, password: str):
    try:
        response = supabase.table("users").insert({
            "username": username,
            "email": email,
            "password": password
        }).execute()
        return {"message": "User registered successfully!", "data": response.data}
    except APIError as e:
        # Handle duplicate username/email errors
        return {"error": str(e)}



@app.post("/login")
def login_user(username: str, password: str):
    try:
        response = supabase.table("users").select("*") \
            .eq("username", username).eq("password", password).execute()

        if len(response.data) == 0:
            raise HTTPException(status_code=401, detail="Invalid credentials")

        return {"message": "Login successful", "user": response.data[0]}
    except APIError as e:
        raise HTTPException(status_code=500, detail=str(e))

