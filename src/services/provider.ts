import { User } from "../types/user";
import { Movements } from "../types/movements";

export abstract class DigitalWalletProvider {
  abstract getUsers(): Promise<User[] | undefined>;
  abstract getUsersByIds(ids: Array<string>): Promise<User[] | undefined>;
  abstract getUserById(id: string): Promise<User | undefined>;
  abstract doTransfer(
    senderId: string,
    receiverId: string,
    amount: number
  ): Promise<any[] | undefined>;
  abstract getMovements(id: string): Promise<Movements[] | undefined>;
}
