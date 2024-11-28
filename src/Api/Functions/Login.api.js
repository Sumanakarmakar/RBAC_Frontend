import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/EndPoints";


export const userLogin=async(data)=>{
    try {
       const response=await axiosInstance.post(endpoints.auth.login, data)
       return response?.data 
    } catch (error) {
        console.log(error);
        
    }
}