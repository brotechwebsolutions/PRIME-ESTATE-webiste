
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { Property, Lead } from '../types';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const propertyService = {
  getAll: async () => {
    const response = await api.get<Property[]>('/properties');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get<Property>(`/properties/${id}`);
    return response.data;
  },
};

export const leadService = {
  create: async (leadData: Lead) => {
    const response = await api.post('/leads', leadData);
    return response.data;
  },
};

export default api;
