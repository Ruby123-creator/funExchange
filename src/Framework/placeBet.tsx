import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

const placingBet = async (data: any) => {
  const response = await axios.post(`https://silverexch24.com/${data?.sport}/place_bet_api`, data?.data);
  return response.data;
};

// React Query Mutation Hook
export const usePlaceBet = () => {
  return useMutation({
    mutationFn: placingBet, // Function that makes the API call
    onSuccess: (data) => {
      console.log("Bet placed successfully!", data);
    },
    onError: (error) => {
      console.error("Error placing bet:", error);
    },
  });
};


const fetchCurrentBetsData = async () => {
  try {
    const response = await axios.get(`/api/currentbets.json`);
    return response.data;
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useCurrentBetsData = () => {
  return useQuery({
    queryKey: ['currentbets-detail'], // Include `id` for query uniqueness
    queryFn: () => fetchCurrentBetsData(), // Fetch function
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};