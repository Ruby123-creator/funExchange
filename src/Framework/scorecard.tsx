import axios from "axios";
import { API_ENDPOINTS } from "./utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

const fetchScorecardUrl = async (val:string) => {
   
    try {
      const response = await axios.get(`${API_ENDPOINTS.SCORECARDS}/${val}`);
      return response.data;
    } catch (error) {
      console.log(error,"ERROR::::::::::")
    }
   
  };
  
  // React Query Hook
  export const useScoreCardData = (val:string) => {
    return useQuery({
      queryKey: ['scorecard-detail',val], // Include `id` for query uniqueness
      queryFn: () => fetchScorecardUrl(val), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };