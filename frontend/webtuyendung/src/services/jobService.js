import { get, patch, post, remove } from "../utils/request";

export const getAlljob = async () => {
  const result = await get("jobs");
  return result;
};

export const getDetailjob = async (id) => {
  const result = await get(`jobs/${id}`);
  return result;
};

export const getListjob = async (id) => {
  const result = await get(`jobs?idCompany=${id}`);
  return result;
};
export const createJob = async (data) => {
  const result = await post("jobs", data);
  return result;
};
export const updateJob = async (id, data) => {
  const result = await patch(`jobs/${id}`, data);
  return result;
};
export const DeleteJob = async (id) => {
  const result = await remove(`jobs/${id}`);
  return result;
};
