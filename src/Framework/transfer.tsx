import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { logOut, showToasterMessage } from './utils/constant';
import { verify } from 'crypto';
import { error } from 'console';
import { useUI } from '../context/ui.context';
interface VerifyResponse {
  uniqid: string;
  flag:boolean
}


const depositAmount = async (data: any) => {
    const formData = new FormData();
    formData.append('name',data?.name);
    formData.append('utr',data?.utr);

    formData.append('amount',data?.amount);
    formData.append('paymentScreenshot',data?.paymentScreenshot);

  const response = await axios.post(`${API_ENDPOINTS.DEPOSIT_AMOUNT}`, formData);
  return response.data;
};

// React Query Mutation Hook
export const useDepositAmount = () => {
  return useMutation({
    mutationFn: depositAmount, // Function that makes the API call
    onSuccess: (data) => {
      if(data?.status === "success"){
        showToasterMessage({messageType:"success",description:data?.message});

      }
      else{
        showToasterMessage({messageType:"error",description:data?.message});
      }
    
    },
    onError: (error) => {
      console.error("Error in changing password", error);
    },
  });
};






const withdrawAmount = async (data: any) => {
    const response = await axios.post(`${API_ENDPOINTS.WITHDRAW_AMOUNT}`, data);
    return response.data;
  };
  
  // React Query Mutation Hook
  export const useWithdrawAmount = () => {
    return useMutation({
      mutationFn: withdrawAmount, // Function that makes the API call
      onSuccess: (data) => {
        if(data?.status === "success"){
          showToasterMessage({messageType:"success",description:data?.message});
  
        }
        else{
          showToasterMessage({messageType:"error",description:data?.message});
        }
      
      },
      onError: (error) => {
        console.error("Error in changing password", error);
      },
    });
  };


  const upiDetails = async (data: any) => {
    const response = await axios.post(`${API_ENDPOINTS.UPI_DETAILS}`, data);
    return response.data?.data;
  };
  
  // React Query Mutation Hook
  export const useUPIDetails = (data:any) => {
    return useQuery({
        queryKey: ['upiDetails',data], // Include `id` for query uniqueness
        queryFn: () => upiDetails(data), // Fetch function
        retry: 3,                 // Retry on failure
        refetchOnWindowFocus: false, // No auto-refetch on focus
      });
  };


  const qrDetails = async (data: any) => {
    const response = await axios.post(`${API_ENDPOINTS.QR_DETAILS}`, data);
    return response.data?.data;
  };
  
  // React Query Mutation Hook
  export const useQRDetails = (data:any) => {
    return useQuery({
        queryKey: ['qrDetails',data], // Include `id` for query uniqueness
        queryFn: () => qrDetails(data), // Fetch function
        retry: 3,                 // Retry on failure
        refetchOnWindowFocus: false, // No auto-refetch on focus
      });
  };


  const accountDetails = async (data: any) => {
    const response = await axios.post(`${API_ENDPOINTS.ACCOUNT_DETAILS}`, data);
    return response.data?.data;
  };
  
  // React Query Mutation Hook
  export const useAccountDetails = (data:any) => {
    return useQuery({
        queryKey: ['accountDetails',data], // Include `id` for query uniqueness
        queryFn: () => accountDetails(data), // Fetch function
        retry: 3,                 // Retry on failure
        refetchOnWindowFocus: false, // No auto-refetch on focus
      });
  };


  const depositHistory = async (data: any) => {
    const formData = new URLSearchParams();
  formData.append('name', data.userName);
  formData.append('from_date', data.startDate);
  formData.append('to_date', data.endDate);
    const response = await axios.post(`${API_ENDPOINTS.DEPOSIT_HISTORY}`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data?.data;
  };
  
  // React Query Mutation Hook
  export const useDepositHistory = (data:any) => {
    return useQuery({
      queryKey: ['depositHistory',data], // Include `id` for query uniqueness
      queryFn: () => depositHistory(data), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };


  const withdrawHistory = async (data: any) => {
      const payload = {
        to_date: data?.endDate,
        from_date: data?.startDate,
        name:data?.userName
      }
    const response = await axios.post(`${API_ENDPOINTS.WITHDRAW_HISTORY}`, payload);
    return response.data;
  };
  
  // React Query Mutation Hook
  export const useWithdrawHistory = (data:any) => {
    return useQuery({
      queryKey: ['withdrawHistory',data], // Include `id` for query uniqueness
      queryFn: () => withdrawHistory(data), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };




  const pendingTransaction = async (data: any) => {
    const response = await axios.post(`${API_ENDPOINTS.PENDING_TRANSACTION}`, data);
    return response.data?.data;
  };
  
  // React Query Mutation Hook
  export const usePendingTransaction = (data:any) => {
    return useQuery({
      queryKey: ['pendingDetails',data], // Include `id` for query uniqueness
      queryFn: () => pendingTransaction(data), // Fetch function
      retry: 3,                 // Retry on failure
      refetchOnWindowFocus: false, // No auto-refetch on focus
    });
  };




