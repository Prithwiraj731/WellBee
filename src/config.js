// API configuration supporting local proxy and production backend deployment
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL 
  ? import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '') 
  : '';
