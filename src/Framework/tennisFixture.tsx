import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


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


// Fetch Product by ID
const fetchTennisDetailsById = async (id:string) => {
  const response = await axios.get(`/api/cricket.json`);
  return response.data;
};

// React Query Hook
export const useTennisDetailsById = (id: string) => {
  return useQuery({
    queryKey: ['cricket-detail', id], // Include `id` for query uniqueness
    queryFn: () => fetchTennisDetailsById(id), // Fetch function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};