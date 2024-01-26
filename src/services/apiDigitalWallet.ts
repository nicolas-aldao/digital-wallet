import axios from "axios";

const baseUrl = "https://json-server-ruby.vercel.app/digital-wallet";
//const baseUrl = "http://localhost:3000";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUsers = async (): Promise<any> => {
  try {
    const res = await axios.get(`${baseUrl}/users`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUserById = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(`${baseUrl}/users/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
// @typescript-eslint/no-explicit-any no-empty
