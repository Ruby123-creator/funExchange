import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useParams } from 'react-router-dom';

// Function to fetch products
const fetchCricketFixture = async (sportsName:string|undefined) => {
  const response = await axios.get(`${API_ENDPOINTS.SPORTS_MATCHES}/${sportsName}matches`);
  return response.data;
};

// React Query Hook
export const useCricketFixture = (sportsName:string|undefined) => {
  return useQuery({
    queryKey: ['cricketFixture',sportsName], // Query Key
    queryFn:()=>fetchCricketFixture(sportsName), // Query Function
    refetchInterval: 1000 * 10, // Cache for 5 minutes
      // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};



// Fetch Product by ID
const fetchCricketDetailsById = async ({id,sport}:any) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.MATCHES_DATA}=${sport}/${id}`);
  return response.data;
  } catch (error) {
      console.log(error,"ERROR::::::::::::::::::::")
  }
  
};

// React Query Hook
export const useCricketDetailsById = ({id,sport}:any) => {
  return useQuery({
    queryKey: ['cricket-detail', id,sport], // Include `id` for query uniqueness
    queryFn: () => fetchCricketDetailsById({id,sport}), // Fetch function
    
    retry: 3,  
    refetchInterval:1000,               // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};


const fetchCricketFancyData = async (eventId:any,sport:string|undefined) => {
  try {
    if(sport === "cricket"){
      const response = await axios.get(`${API_ENDPOINTS.CRICKET_FANCY_DATA}/${eventId}`);
      return response.data;
    }
    
  } catch (error) {
    console.log(error,"ERROR::::::::::")
  }
 
};

// React Query Hook
export const useCricketFancyData = (eventId:any) => {
  const {sport} = useParams();
  return useQuery({
    queryKey: ['cricket-fancy-detail', eventId,sport], // Include `id` for query uniqueness
    queryFn: () => fetchCricketFancyData(eventId,sport), // Fetch function
    refetchInterval:1000, 
    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};