import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';






// Fetch Product by ID
const fetchUserDetails = async () => {
    const response = await fetch("/api/userdata.json");
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return response.json();
  };
  
  // React Query Hook
  export const useAdminDetails = () => {
    return useQuery({
      queryKey: ['useDetail-detail'], // Include `id` for query uniqueness
      queryFn: () => fetchUserDetails(), // Fetch function
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };
