import { get } from "../../src/utils/request";
export const getCityList = async () => {
  const result = await get("city");
  return result;
};
