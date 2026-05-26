from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class GameBase(BaseModel):
    title: str
    platform: str
    status: Optional[str] = "backlog"

class GameCreate(GameBase):
    pass

class GameUpdate(BaseModel):
    title: Optional[str] = None
    platform: Optional[str] = None
    status: Optional[str] = None

class GameResponse(GameBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
