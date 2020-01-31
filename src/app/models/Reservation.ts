export interface Reservation {
  reservationId: number;
  userId: number;
  toolId: string;
  reservationStartTime: Date;
  reservationEndTime: Date;
}
