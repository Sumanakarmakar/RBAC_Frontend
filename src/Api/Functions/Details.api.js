import Swal from "sweetalert2";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/EndPoints";

export const getProductDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.cms.details}/${id}`);
    return response?.data?.singleData;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      text: error?.response?.data?.message,
    });
  }
};
