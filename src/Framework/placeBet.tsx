import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useUI } from '../context/ui.context';
import { showToasterMessage } from './utils/constant';

const placingBet = async (data: any) => {
  let val;
  if(data?.sport === 'horseRacing_racecard'){
    val = "horse";
   }else if(data?.sport === 'greyhound_racecard'){
     val = "greyhound";
     
   }
   else{
     val = data?.sport;
   }
  console.log(data,"check:::::::::::::")
  const response = await axios.post(`${API_ENDPOINTS.PLACEBET}${val}/place_bet_api`, data?.data);
  return response.data;
};

// React Query Mutation Hook
export const usePlaceBet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: placingBet, // Function that makes the API call
    onSuccess: (data) => {
      showToasterMessage({ messageType: "success", description: "Bet placed successfully" });

      console.log("Bet placed successfully!", data);
            queryClient.invalidateQueries({ queryKey: ["currentbets-detail"] });

    },
    onError: (error) => {
      showToasterMessage({ messageType: "error", description: "Error Occurred" });

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


const fetchAllBetsData = async (data:any) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.ALLBETS}?from=${data?.startDate}&to=${data?.endDate}&UserName=${data?.userName}`);
    return response.data?.data;
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useAllBetsData = (data:any) => {
  return useQuery({
    queryKey: ['allBets-detail',data], // Include `id` for query uniqueness
    queryFn: () => fetchAllBetsData(data), // Fetch function
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
  console.log(data,"kinjaruuuu")
  return useQuery({
    queryKey: ['allAccountStatement-detail',data], // Include `id` for query uniqueness
    queryFn: () => fetchAllAccountStatement(data), // Fetch function
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};