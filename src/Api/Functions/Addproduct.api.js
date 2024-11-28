import Swal from "sweetalert2";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/EndPoints";


export const addproduct=async(data)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.create, data)
        return response?.data
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: "error",
            text: error?.response?.data?.message
        })
    }
}