import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/EndPoints";
import Swal from "sweetalert2";

export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.cms.remove}/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error?.response);
    Swal.fire({
        icon: "error",
        text: error?.response?.data?.message
    })
  }
};
