import axios from "axios";

const baseUrl = "https://json-server-ruby.vercel.app/digital-wallet";
//const baseUrl = "http://localhost:3000";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/users`);
    return res;
  } catch (err) {}
};

export const getUserById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${id}`);
    return res;
  } catch (err) {}
};
