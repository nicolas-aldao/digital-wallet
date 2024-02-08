import axios from "axios";
import { API_URL } from "../Constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUsers = async (): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/users`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUsersByIds = async (ids: Array<string>): Promise<any> => {
  try {
    const idsQueryString = ids.join(",");
    const res = await axios.get(`${API_URL}/users/list?ids=${idsQueryString}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUserById = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/users/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
// @typescript-eslint/no-explicit-any no-empty
