import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';

const placingBet = async (data: any) => {
  const response = await axios.post(`${API_ENDPOINTS.SPORTS_MATCHES}/placebet`, data);
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


