import { BookingStates } from "./bookingStates.enum";

export interface IBooking {
  _id: string;
  customer: string;
  supplier: string;
  numberRequest: number;
  date: string;
  startTime: string;
  endTime: string;
  reference: string;
  platform: string;
  palletsQuantity: number;
  lumpsQuantity: number;
  volume: number;
  driverName: string;
  driverRut: string;
  vehiclePatent: string;
  peonetaName: string;
  peonetaRut: string;
  observations: string;
  deleted?: boolean;
  state: BookingStates;
}

export class Booking {
  _id: string;
  customer: string;
  supplier: string;
  numberRequest: number;
  date: string;
  startTime: string;
  endTime: string;
  reference: string;
  platform: string;
  palletsQuantity: number;
  lumpsQuantity: number;
  volume: number;
  driverName: string;
  driverRut: string;
  vehiclePatent: string;
  peonetaName: string;
  peonetaRut: string;
  observations: string;
  deleted?: boolean;
  state: BookingStates;

  constructor(booking: IBooking) {
    this._id = booking._id;
    this.customer = booking.customer;
    this.supplier = booking.supplier;
    this.numberRequest = booking.numberRequest;
    this.date = booking.date;
    this.startTime = booking.startTime;
    this.endTime = booking.endTime;
    this.reference = booking.reference;
    this.platform = booking.platform;
    this.palletsQuantity = booking.palletsQuantity;
    this.lumpsQuantity = booking.lumpsQuantity;
    this.volume = booking.volume;
    this.driverName = booking.driverName;
    this.driverRut = booking.driverRut;
    this.vehiclePatent = booking.vehiclePatent;
    this.peonetaName = booking.peonetaName;
    this.peonetaRut = booking.peonetaRut;
    this.observations = booking.observations;
    this.deleted = booking.deleted;
    this.state = booking.state;
  }

  toJSON(): IBooking {
    return {
      _id: this._id,
      customer: this.customer,
      supplier: this.supplier,
      numberRequest: this.numberRequest,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime,
      reference: this.reference,
      platform: this.platform,
      palletsQuantity: this.palletsQuantity,
      lumpsQuantity: this.lumpsQuantity,
      volume: this.volume,
      driverName: this.driverName,
      driverRut: this.driverRut,
      vehiclePatent: this.vehiclePatent,
      peonetaName: this.peonetaName,
      peonetaRut: this.peonetaRut,
      observations: this.observations,
      deleted: this.deleted,
      state: this.state,
    };
  }
}
