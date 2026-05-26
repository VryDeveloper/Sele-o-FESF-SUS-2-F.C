from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.models.database import get_db
from app.schemas.game import GameCreate, GameUpdate, GameResponse
from app.services import game_service

router = APIRouter()

@router.get("/", response_model=List[GameResponse])
def list_games(db: Session = Depends(get_db)):
    return game_service.get_all_games(db)

@router.get("/{game_id}", response_model=GameResponse)
def get_game(game_id: int, db: Session = Depends(get_db)):
    game = game_service.get_game_by_id(db, game_id)
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")
    return game

@router.post("/", response_model=GameResponse, status_code=201)
def create_game(game: GameCreate, db: Session = Depends(get_db)):
    return game_service.create_game(db, game)

@router.put("/{game_id}", response_model=GameResponse)
def update_game(game_id: int, game: GameUpdate, db: Session = Depends(get_db)):
    updated = game_service.update_game(db, game_id, game)
    if not updated:
        raise HTTPException(status_code=404, detail="Game not found")
    return updated

@router.delete("/{game_id}", status_code=204)
def delete_game(game_id: int, db: Session = Depends(get_db)):
    deleted = game_service.delete_game(db, game_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Game not found")
