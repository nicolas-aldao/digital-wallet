import axios from "axios";
import { API_URL } from "../Constants";

export const getUsers = async (): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/users`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUsersByIds = async (ids: Array<string>): Promise<any> => {
  try {
    const idsQueryString = ids.join(",");
    const res = await axios.get(`${API_URL}/users/list?ids=${idsQueryString}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(`${API_URL}/users/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const doTransfer = async (
  senderId: string,
  receiverId: string,
  amount: number
): Promise<any> => {
  try {
    const res = await axios.post(`${API_URL}/transfer`, {
      senderId,
      receiverId,
      amount,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
