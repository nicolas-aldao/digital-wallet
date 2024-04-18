import axios from "axios";
import { DigitalWalletProvider } from "./provider";
import { API_URL } from "../Constants";
import { User } from "../types/user";
import { Movements } from "../types/movements";

export class WebApiService implements DigitalWalletProvider {
  getUsers = async (): Promise<User[] | undefined> => {
    const res = await axios.get(`${API_URL}/users`);
    if (res?.request?.status === 200) {
      return res.data;
    } else {
      throw new Error("error!");
    }
  };

  getUsersByIds = async (ids: Array<string>): Promise<User[] | undefined> => {
    const idsQueryString = ids?.join(",");
    const res = await axios.get(`${API_URL}/users/list?ids=${idsQueryString}`);
    if (res?.request?.status === 200) {
      return res.data;
    } else {
      throw new Error("error!");
    }
  };

  getUserById = async (id: string): Promise<User | undefined> => {
    try {
      const res = await axios.get(`${API_URL}/users/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  doTransfer = async (
    senderId: string,
    receiverId: string,
    amount: number
  ): Promise<any> => {
    const res = await axios.post(`${API_URL}/transfer`, {
      senderId,
      receiverId,
      amount,
    });
    if (res?.request?.status === 200) {
      return res?.data?.message;
    } else {
      throw new Error("error!");
    }
  };

  getMovements = async (id: string): Promise<Movements[] | undefined> => {
    try {
      const res = await axios.get(`${API_URL}/movements/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}
