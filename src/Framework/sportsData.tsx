import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useParams } from 'react-router-dom';

// Function to fetch products
const fetchSportFixture = async (sportsName:string|undefined) => {
  const response = await axios.get(`${API_ENDPOINTS.SPORTS_MATCHES}/${sportsName}matches`);
  return response.data;
};

// React Query Hook
export const useSportFixture = (sportsName:string|undefined) => {
  return useQuery({
    queryKey: [`${sportsName}Fixture`,sportsName], // Query Key
    queryFn:()=>fetchSportFixture(sportsName), // Query Function
    refetchInterval: 1000 * 10, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};



// Fetch Product by ID
const fetchSportDetailsById = async ({id,sport}:any) => {
  let val;
  if(sport === 'horseRacing_racecard'){
       val = "racecard"; 
      }else if(sport === 'greyhound_racecard'){
        val = "racecard/greyhound";
        
      }
      else{
        val = sport;
      }
  try {
    const response = await axios.get(`${API_ENDPOINTS.MATCHES_DATA}=${val}/${id}`);
  return response.data||[];
  } catch (error) {
      console.log(error,"ERROR::::::::::::::::::::")
  }
  
};

// React Query Hook
export const useSportDetailsById = ({id,sport}:any) => {
  return useQuery({
    queryKey: [`${sport||"sport"}-detail`, id,sport], // Include `id` for query uniqueness
    queryFn: () => fetchSportDetailsById({id,sport}), // Fetch function
    
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
    return [];
    
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