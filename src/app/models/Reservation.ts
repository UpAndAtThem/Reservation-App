export interface Reservation {
  reservationId?: string;
  userId: number;
  toolId: string;
  reservationStartTime: Date;
  reservationEndTime: Date;
}
