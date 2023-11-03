import { movieGradeData, reservationData } from "../types";

export const RESERVATION_STORAGE_KEY = "reservationData";
export const GRADE_STORAGE_KEY = "gradeData";

export default class Storage {
    static getReservationData() : reservationData {
        return (JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY) ?? "{}") as reservationData);
    }

    static setReservationAppData(value: reservationData) {
        localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(value));
    }

    static getGradeData() : movieGradeData {
        return (JSON.parse(localStorage.getItem(GRADE_STORAGE_KEY) ?? "{}") as movieGradeData);
    }

    static setGradeData(value: movieGradeData) {
        localStorage.setItem(GRADE_STORAGE_KEY, JSON.stringify(value));
    }
}

