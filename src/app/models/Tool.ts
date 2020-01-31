export interface Tool {
  _id: any;
  toolName: string;
  toolDescription: string;
  userNeedsCert: boolean;
  userMaxMonthlyReservations?: number;
}
