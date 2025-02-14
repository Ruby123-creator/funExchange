import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchFootballFixture = async () => {
  const response = await axios.get("/api/soccermatches.json");
  return response.data;
};

// React Query Hook
export const useFootballFixture = () => {
  return useQuery({
    queryKey: ['footballFixture'], // Query Key
    queryFn: fetchFootballFixture, // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};


