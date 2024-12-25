import { get, post, patch } from "../utils/request";
export const getAllCompany = async () => {
  const result = await get("company");
  return result;
};
export const getCompanyDetail = async (id) => {
  const result = await get(`company/${id}`);
  return result;
};

export const checkExits = async (type, value) => {
  const result = await get(`company?${type}=${value}`);
  return result;
};
export const createCompany = async (data) => {
  console.log(data);
  const result = await post("company", data);
  return result;
};

export const login = async (email, password) => {
  try {
    const response = await post("company/login", { email, password });
    return response; // Trả về dữ liệu nhận được từ API
  } catch (error) {
    console.error("Login failed:", error);
    return [];
  }
};
export const editCompany = async (id, data) => {
  const result = await patch(`company/${id}`, data);
  return result;
};
