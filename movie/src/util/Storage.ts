import { reservationData } from "../types";

export const RESERVATION_STORAGE_KEY = "reservationData";

export default class Storage {
    static getReservationData() : reservationData {
        return (JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY) ?? "{}") as reservationData);
    }

    static setReservationAppData(value: reservationData) {
        localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(value));
    }
}

