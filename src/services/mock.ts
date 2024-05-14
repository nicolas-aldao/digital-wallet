import { DigitalWalletProvider } from "./provider";
import { User } from "../types/user";
import { Movements } from "../types/movements";

export class MockService implements DigitalWalletProvider {
  wait = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
  };

  getUsers = async (): Promise<User[] | undefined> => {
    await this.wait();
    const res = {
      request: { status: 200 },
      data: [
        {
          _id: "1",
          firstname: "John",
          lastname: "Doe",
          balance: 100,
          contacts: [],
          profile_pic: "https://randomuser.me/api/portraits/men/47.jpg"
        },
        {
          _id: "2",
          firstname: "Jane",
          lastname: "Doe",
          balance: 200,
          contacts: [],
          profile_pic: "https://randomuser.me/api/portraits/men/54.jpg"
        },
      ],
    };
    return res.data;
    // throw new Error("Error!");
  };

  getUsersByIds = async (): Promise<User[] | undefined> => {
    await this.wait();
    return [
      {
        _id: "1",
        firstname: "Contact",
        lastname: "1",
        balance: 100,
        contacts: [],
        profile_pic: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        _id: "2",
        firstname: "Contact",
        lastname: "2",
        balance: 200,
        contacts: [],
        profile_pic: "https://randomuser.me/api/portraits/men/47.jpg"
      },
    ];
    // throw new Error("Error!");
  };

  getUserById = async (): Promise<User> => {
    await this.wait();
    return {
      _id: "1",
      firstname: "John",
      lastname: "Doe",
      balance: 100,
      contacts: [],
      profile_pic: "https://randomuser.me/api/portraits/men/47.jpg"
    };
  };

  doTransfer = async (): Promise<any> => {
    await this.wait();

    const res = {
      request: { status: 200 },
      data: { message: "Transfer Successful" },
    };
    return res.data.message;

    // const resFailed = { status: 400, data: { error: "Transfer Failed" } },
    // throw new Error("Error!");
  };

  getMovements = async (): Promise<Movements[] | undefined> => {
    await this.wait();
    return [
      {
        _id: "1",
        senderId: "2",
        senderFullname: "3",
        receiverId: "1",
        receiverFullname: "John Doe",
        amount: 5.0,
        date: new Date("2024-02-12T06:30:33.625+00:00"),
      },
    ];
  };
}
