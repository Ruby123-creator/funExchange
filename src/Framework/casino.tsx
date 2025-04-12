import axios from "axios";
import { API_ENDPOINTS } from "./utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";
import { useUI } from "../context/ui.context";

const fetchQtechUrl = async (user:string) => {
   
    try {
      const response = await axios.get(`${API_ENDPOINTS.QTECH_URL}?username=${user}`);
      return response.data;
    } catch (error) {
      console.log(error,"ERROR::::::::::")
    }
   
  };
  
  // React Query Hook
  export const useQtechUrl = () => {
    const {userData} = useUI();
    return useQuery({
      queryKey: ['allBets-detail',userData?.UserName], // Include `id` for query uniqueness
      queryFn: () => fetchQtechUrl(userData?.UserName), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };


  const fetchCasinoReport = async (user: string) => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.CASINO_HISTORY}?username=${user}`);
      
      
      return response?.data;  // Return the final fetched data
    } catch (error) {
      console.error("Error fetching casino report:", error);
      throw error; // Ensure React Query retries on failure
    }
  };
  
  // React Query Hook
  export const useCasinoReport = () => {
    const { userData } = useUI();
    const username = userData?.UserName;
  
    return useQuery({
      queryKey: ['casino-report', username],
      queryFn: () => fetchCasinoReport(username!),
      enabled: !!username,  // Prevent execution if username is missing
      retry: 3,
      refetchOnWindowFocus: false,
    });
  };



  const fetchACasinoSettlement = async (data:any) => {
    if(data?.userName){
      try {
        const response = await axios.get(`${API_ENDPOINTS.CASINO_SETTLEMENT}?from=${data?.startDate}&to=${data?.endDate}&username=${data?.userName}`);
        return response.data?.transactions;
      } catch (error) {
        console.log(error,"ERROR::::::::::")
      }
    }
   return [];
   
  };
  
  // React Query Hook
  export const useCasinoSettlement = (data:any) => {
    console.log(data,"kinjaruuuu")
    return useQuery({
      queryKey: ['casinoSettlement-detail',data], // Include `id` for query uniqueness
      queryFn: () => fetchACasinoSettlement(data), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };


  
