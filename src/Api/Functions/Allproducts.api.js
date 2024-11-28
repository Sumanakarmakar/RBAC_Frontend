import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/EndPoints";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.allproducts);
    return response?.data?.products;
  } catch (error) {
    console.log(error);
  }
};
