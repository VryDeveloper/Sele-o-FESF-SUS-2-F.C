from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import games
from app.models.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="GameVault API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(games.router, prefix="/games", tags=["games"])

@app.get("/")
def root():
    return {"message": "GameVault API is running"}
