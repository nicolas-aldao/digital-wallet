import axios from "axios";
import { DigitalWalletProvider } from "./provider";
import { API_URL } from "../Constants";
import { User } from "../types/user";
import { Movements } from "../types/movements";

export class WebApiService implements DigitalWalletProvider {
  getUsers = async (): Promise<User[] | undefined> => {
    try {
      const res = await axios.get(`${API_URL}/users`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getUsersByIds = async (ids: Array<string>): Promise<User[] | undefined> => {
    try {
      const idsQueryString = ids.join(",");
      const res = await axios.get(
        `${API_URL}/users/list?ids=${idsQueryString}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
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
    try {
      const res = await axios.post(`${API_URL}/transfer`, {
        senderId,
        receiverId,
        amount,
      });
      return res;
    } catch (err) {
      return err;
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
