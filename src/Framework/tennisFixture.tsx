import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchTennisFixture = async () => {
  const response = await axios.get("/api/tennis-matches.json");
  return response.data;
};

// React Query Hook
export const useTennisFixture = () => {
  return useQuery({
    queryKey: ['tennisFixture'], // Query Key
    queryFn: fetchTennisFixture, // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};
