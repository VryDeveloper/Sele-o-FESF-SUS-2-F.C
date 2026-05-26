from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.models.database import Base

class Game(Base):
    __tablename__ = "games"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    platform = Column(String, nullable=False)
    status = Column(String, default="backlog")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
