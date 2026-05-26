# PT-BR
# GameVault

<img width="1852" height="718" alt="screenshot" src="https://github.com/user-attachments/assets/b27ed006-9905-4f61-8b5a-381f81c1f47d" />

Aplicação full stack para gerenciamento de biblioteca de jogos com operações CRUD completas.

## Tecnologias

- **Backend**: Python 3.11, FastAPI, SQLAlchemy, SQLite, Pydantic
- **Frontend:** React 18, Axios
- **Infraestrutura:** Docker, Docker Compose

## Como Executar

### Pré-requisitos

- Docker e Docker Compose instalados

### Iniciar tudo com um comando

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend (API): http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Parar os containers

```bash
docker-compose down
```

---

### Rodar sem Docker (desenvolvimento)

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Funcionalidades

- Listar jogos
- Criar novo jogo
- Editar jogo existente
- Excluir jogo
- Organizar jogos por status (jogando, concluído, backlog)
- Interface em modo escuro

## Estrutura do Projeto

```
/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   │   ├── database.py
│   │   │   └── game.py
│   │   ├── schemas/
│   │   │   └── game.py
│   │   ├── services/
│   │   │   └── game_service.py
│   │   └── routes/
│   │       └── games.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── GameForm.jsx
│   │   │   └── GameItem.jsx
│   │   └── services/
│   │       └── api.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Endpoints da API

| Method | Route | Description |
|--------|------|-----------|
| GET | /games/ | List all games |
| GET | /games/{id} | Get game by ID |
| POST | /games/ | Create new game |
| PUT | /games/{id} | Update game |
| DELETE | /games/{id} | Delete game |

## Modelo de Jogo

Cada jogo possui os seguintes campos:

- **id**: Identificador único
- **title**: Título do jogo (obrigatório)
- **platform**: Plataforma do jogo (obrigatório)
- **status**: Status atual — "playing", "completed" ou "backlog" (padrão: "backlog")
- **created_at**: Data de criação
- **updated_at**: Data da última atualização



# ENG
# GameVault

Full-stack game library management application with complete CRUD operations.

## Technologies

- **Backend:** Python 3.11, FastAPI, SQLAlchemy, SQLite, Pydantic
- **Frontend:** React 18, Axios
- **Infrastructure:** Docker, Docker Compose

## How to Run

### Prerequisites
- Docker and Docker Compose installed

### Start everything with one command

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend (API): http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Stop containers

```bash
docker-compose down
```

---

### Run without Docker (development)

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Features

- List games
- Create new game
- Edit existing game
- Delete game
- Organize games by status (playing, completed, backlog)
- Dark mode interface

## Project Structure

```
/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   │   ├── database.py
│   │   │   └── game.py
│   │   ├── schemas/
│   │   │   └── game.py
│   │   ├── services/
│   │   │   └── game_service.py
│   │   └── routes/
│   │       └── games.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── GameForm.jsx
│   │   │   └── GameItem.jsx
│   │   └── services/
│   │       └── api.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## API Endpoints

| Method | Route | Description |
|--------|------|-----------|
| GET | /games/ | List all games |
| GET | /games/{id} | Get game by ID |
| POST | /games/ | Create new game |
| PUT | /games/{id} | Update game |
| DELETE | /games/{id} | Delete game |

## Game Model

Each game has the following fields:

- **id**: Unique identifier
- **title**: Game title (required)
- **platform**: Gaming platform (required)
- **status**: Current status - "playing", "completed", or "backlog" (default: "backlog")
- **created_at**: Creation timestamp
- **updated_at**: Last update timestamp
