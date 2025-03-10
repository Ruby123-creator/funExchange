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