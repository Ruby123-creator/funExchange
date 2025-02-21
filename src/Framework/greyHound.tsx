import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchGreyhoundRacingFixture = async () => {
  const response = await axios.get(API_ENDPOINTS.GREY_HOUND_RACING);
  return response.data;
};

// React Query Hook
export const useGreyhoundRacingFixture = () => {
  return useQuery({
    queryKey: ['greyhoundFixture'], // Query Key
    queryFn: fetchGreyhoundRacingFixture, // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};



const fetchRacingDetailsById = async ({id,sport}:any) => {
  const response = await axios.get(`${API_ENDPOINTS.RACING_DATA}=${sport}/${id}`);
  return response.data;
};

// React Query Hook
export const useRacingDetailsById = ({id,sport}:any) => {
  

  return useQuery({
    queryKey: ['racing-detail', id,sport], // Include `id` for query uniqueness
    queryFn: () => fetchRacingDetailsById({id,sport}), // Fetch function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};