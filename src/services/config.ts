import axios from 'axios';

// src/services/axios.ts

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // o process.env.REACT_APP_API_BASE_URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
  }
});
