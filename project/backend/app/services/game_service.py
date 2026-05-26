from sqlalchemy.orm import Session
from app.models.game import Game
from app.schemas.game import GameCreate, GameUpdate

def get_all_games(db: Session):
    return db.query(Game).all()

def get_game_by_id(db: Session, game_id: int):
    return db.query(Game).filter(Game.id == game_id).first()

def create_game(db: Session, game: GameCreate):
    db_game = Game(**game.model_dump())
    db.add(db_game)
    db.commit()
    db.refresh(db_game)
    return db_game

def update_game(db: Session, game_id: int, game: GameUpdate):
    db_game = get_game_by_id(db, game_id)
    if not db_game:
        return None
    update_data = game.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_game, key, value)
    db.commit()
    db.refresh(db_game)
    return db_game

def delete_game(db: Session, game_id: int):
    db_game = get_game_by_id(db, game_id)
    if not db_game:
        return False
    db.delete(db_game)
    db.commit()
    return True
