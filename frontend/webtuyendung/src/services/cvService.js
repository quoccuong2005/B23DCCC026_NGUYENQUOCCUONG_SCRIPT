import { get, patch, post, put, remove } from "../utils/request";
export const createCV = async (data) => {
  const result = await post("cv", data);
  return result;
};

export const getListCV = async (id) => {
  const result = await get(`cv?idCompany=${id}`);
  return result;
};
export const getDetailCV = async (id) => {
  const result = await get(`cv/${id}`);
  return result;
};
export const changeStatusCV = async (id, statusRead) => {
  const result = await patch(`cv/${id}/statusRead`, { statusRead });
  return result;
};
export const deleteCV = async (id) => {
  const result = await remove(`cv/${id}`);
  return result;
};
