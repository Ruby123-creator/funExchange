import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { showToasterMessage } from './utils/constant';
import { verify } from 'crypto';
interface VerifyResponse {
  uniqid: string;
}


const changePassword = async (data: any) => {
  const response = await axios.post(`${API_ENDPOINTS.SPORTS_MATCHES}/change-password`, data);
  return response.data;
};

// React Query Mutation Hook
export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword, // Function that makes the API call
    onSuccess: (data) => {
      console.log("change password successfully!", data);
    },
    onError: (error) => {
      console.error("Error in changing password", error);
    },
  });
};


const login = async (data: any) => {
  const response = await axios.post(API_ENDPOINTS.LOGIN,data);
  return {
    
    data:response.data,
    userData:data
  };
};

// React Query Mutation Hook
export const useLoginPassword = () => {
  return useMutation({
    mutationFn: login, // Function that makes the API call
    onSuccess: ({data,userData}) => {
      const val = { username: userData.UserName, uniqid: data.uniqid };
      console.log(val,data,userData,"RYBUUUU")
        if(data?.status  === "success"){
          localStorage.setItem('credentials', JSON.stringify(val));
          localStorage.setItem('isLogin', JSON.stringify(true));

          showToasterMessage({messageType:"success",description:data?.message})
           window.location.reload();
        }
        else{
      showToasterMessage({messageType:"error",description:data?.message})

        }

      // console.log("change password successfully!", data);
    },
    onError: (error) => {
      showToasterMessage({messageType:"error",description:error?.message})

      // console.error("Error in changing password", error);
    },
  });
};


const loginVerify = async ({ uniqid, username }: { uniqid: string; username: string }): Promise<VerifyResponse> => {
  if (!username || !uniqid) throw new Error('Missing parameters');

  const response = await axios.get<VerifyResponse>(
    `${API_ENDPOINTS.LOGINVERIFICATION}?name=${username}&uniqueid=${uniqid}`
  );

  if (response.status === 200 && response.data) {
    return response.data;
  }

  throw new Error('Invalid response');
};

export const useLoginVerificationQuery = (input: { uniqid: string; username: string } | null) => {
  return useQuery({
    queryKey: ['verify-detail', input?.uniqid, input?.username], // ✅ Avoid passing entire object
    queryFn: () => loginVerify(input!), // ✅ Ensure input is not undefined
    enabled: !!input, // ✅ Only run if input exists
    refetchInterval: 1000 * 10, // Cache for 5 minutes
    retry: 3, // ✅ Retry on failure
    refetchOnWindowFocus: false, // ✅ No auto-refetch on window focus
  });
};
// Fetch Product by ID
export const fetchIPAdress= async () => {
  const response = await fetch("https://api64.ipify.org?format=json");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
export const useIPDetails = () => {
  return useQuery({
    queryKey: ['ipAdress-detail'], // Include `id` for query uniqueness
    queryFn: () => fetchIPAdress(), // Fetch function
    refetchInterval: 1000 * 10, // Cache for 5 minutes

    retry: 3,                 // Retry on failure
    refetchOnWindowFocus: false, // No auto-refetch on focus
  });
};
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
      refetchInterval: 1000 * 10, // Cache for 5 minutes
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };
