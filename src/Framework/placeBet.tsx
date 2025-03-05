import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useUI } from '../context/ui.context';

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


const fetchCurrentBetsData = async (user:string) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.CURRENTBETS}?UserName=${user}`);
    return response.data?.bets;
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useCurrentBetsData = () => {
  const {userData} = useUI();
  return useQuery({
    queryKey: ['currentbets-detail',userData?.UserName], // Include `id` for query uniqueness
    queryFn: () => fetchCurrentBetsData(userData?.UserName), // Fetch function
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};


const fetchAllBetsData = async (user:string) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.ALLBETS}?UserName=${user}`);
    return response.data?.bets;
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useAllBetsData = () => {
  const {userData} = useUI();
  return useQuery({
    queryKey: ['allBets-detail',userData?.UserName], // Include `id` for query uniqueness
    queryFn: () => fetchAllBetsData(userData?.UserName), // Fetch function
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};



const fetchAllAccountStatement = async (data:any) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.ACCOUNT_STATEMENT}?from=${data?.startDate}&to=${data?.endDate}&UserName=${data?.userName}&AccountType=USER&type=all`);
    return response.data?.data;
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useAccountStatementData = (data:any) => {
  return useQuery({
    queryKey: ['allAccountStatement-detail',data], // Include `id` for query uniqueness
    queryFn: () => fetchAllAccountStatement(data), // Fetch function
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};