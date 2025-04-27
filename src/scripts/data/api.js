import CONFIG from '../config';

const ENDPOINTS = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  ADD_STORY: `${CONFIG.BASE_URL}/stories`,
  GET_STORIES: `${CONFIG.BASE_URL}/stories`,
};

export async function register(name, email, password) {
  const response = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
}

export async function login(email, password) {
  const response = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  const data = await response.json();
  if (!data.error) {
    const token = data.loginResult.token;
    localStorage.setItem('token', token);
  }
  return data;
}

export async function addStory(description, photo, lat, lon) {
  const formData = new FormData();
  formData.append('description', description);
  formData.append('photo', photo);
  if (lat) formData.append('lat', lat);
  if (lon) formData.append('lon', lon);

  const token = localStorage.getItem('token');
  const response = await fetch(ENDPOINTS.ADD_STORY, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData,
  });
  return response.json();
}

export async function getAllStories(page = 1, size = 10) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${ENDPOINTS.GET_STORIES}?page=${page}&size=${size}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return response.json();
}