import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchCricketFixture = async () => {
  const response = await axios.get(`${API_ENDPOINTS.SPORTS_MATCHES}/cricketmatches`);
  return response.data;
};

// React Query Hook
export const useCricketFixture = () => {
  return useQuery({
    queryKey: ['cricketFixture'], // Query Key
    queryFn: fetchCricketFixture, // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};



// Fetch Product by ID
const fetchCricketDetailsById = async ({id,sport}:any) => {
  const response = await axios.get(`${API_ENDPOINTS.MATCHES_DATA}=cricket/607922341`);
  return response.data;
};

// React Query Hook
export const useCricketDetailsById = ({id,sport}:any) => {
  return useQuery({
    queryKey: ['cricket-detail', id,sport], // Include `id` for query uniqueness
    queryFn: () => fetchCricketDetailsById({id,sport}), // Fetch function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};


const fetchCricketFancyData = async ({id,sport}:any) => {
  const response = await axios.get(`${API_ENDPOINTS.CRICKET_FANCY_DATA}/607922341`);
  return response.data;
};

// React Query Hook
export const useCricketFancyData = ({id,sport}:any) => {
  return useQuery({
    queryKey: ['cricket-detail', id,sport], // Include `id` for query uniqueness
    queryFn: () => fetchCricketFancyData({id,sport}), // Fetch function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};