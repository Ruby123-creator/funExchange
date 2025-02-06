import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchHorseRacingFixture = async () => {
  const response = await axios.get("/api/horse-matches.json");
  return response.data;
};

// React Query Hook
export const useHorseRacingFixture = () => {
  return useQuery({
    queryKey: ['horseRacingFixture'], // Query Key
    queryFn: fetchHorseRacingFixture, // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};
