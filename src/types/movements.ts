export interface Movements {
  _id: string;
  senderId: string;
  senderFullname: string;
  receiverId: string;
  receiverFullname: string;
  amount: number;
  date: Date;
}
