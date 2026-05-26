import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
});

export const getGames = () => api.get('/games/');
export const getGame = (id) => api.get(`/games/${id}`);
export const createGame = (data) => api.post('/games/', data);
export const updateGame = (id, data) => api.put(`/games/${id}`, data);
export const deleteGame = (id) => api.delete(`/games/${id}`);
