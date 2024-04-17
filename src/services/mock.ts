import { DigitalWalletProvider } from "./provider";
import { User } from "../types/user";
import { Movements } from "../types/movements";

export class MockService implements DigitalWalletProvider {
  getUsers = async (): Promise<User[] | undefined> => {
    return [
      {
        _id: "1",
        firstname: "John",
        lastname: "Doe",
        balance: 100,
        contacts: [],
      },
      {
        _id: "2",
        firstname: "Jane",
        lastname: "Doe",
        balance: 200,
        contacts: [],
      },
    ];
  };

  getUsersByIds = async (ids: Array<string>): Promise<User[] | undefined> => {
    return [
      {
        _id: "1",
        firstname: "Contact",
        lastname: "1",
        balance: 100,
        contacts: [],
      },
      {
        _id: "2",
        firstname: "Contact",
        lastname: "2",
        balance: 200,
        contacts: [],
      },
    ];
  };

  getUserById = async (id: string): Promise<User> => {
    return {
      _id: "1",
      firstname: "John",
      lastname: "Doe",
      balance: 100,
      contacts: [],
    };
  };

  doTransfer = async (
    senderId: string,
    receiverId: string,
    amount: number
  ): Promise<any> => {
    // return {
    //   request: { status: 200 },
    //   data: { message: "Transfer Successful" },
    // };
    return {
      response: { status: 400, data: { error: "Transfer Failed" } },
    };
  };

  getMovements = async (id: string): Promise<Movements[] | undefined> => {
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
