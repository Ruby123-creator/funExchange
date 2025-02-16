import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchFootballFixture = async () => {
  const response = await axios.get(`${API_ENDPOINTS.SPORTS_MATCHES}/soccermatches`);
  return response.data;
};

// React Query Hook
export const useFootballFixture = () => {
  return useQuery({
    queryKey: ['footballFixture'], // Query Key
    queryFn: fetchFootballFixture, // Query Function
    refetchInterval:1000*10, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};


