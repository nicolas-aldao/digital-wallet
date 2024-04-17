import { User } from "../types/user";
import { Movements } from "../types/movements";
import { DigitalWalletProvider } from "./provider";

export class WalletService {
  private users: User[] | undefined = [];
  private user: User | undefined;
  private res: any;
  private movements: Movements[] | undefined = [];

  constructor(private walletProvider: DigitalWalletProvider) {}

  async getUsers() {
    this.users = await this.walletProvider.getUsers();

    return this.users;
  }

  async getUsersByIds(ids: Array<string>) {
    this.users = await this.walletProvider.getUsersByIds(ids);

    return this.users;
  }

  async getUserById(id: string) {
    this.user = await this.walletProvider.getUserById(id);

    return this.user;
  }

  async doTransfer(senderId: string, receiverId: string, amount: number) {
    this.res = await this.walletProvider.doTransfer(
      senderId,
      receiverId,
      amount
    );

    return this.res;
  }

  async getMovements(id: string) {
    this.movements = await this.walletProvider.getMovements(id);

    return this.movements;
  }
}
