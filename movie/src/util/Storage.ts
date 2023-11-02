import { movieCommentData, reservationData } from "../types";

export const RESERVATION_STORAGE_KEY = "reservationData";
export const COMMENT_STORAGE_KEY = "commentData";

export default class Storage {
    static getReservationData() : reservationData {
        return (JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY) ?? "{}") as reservationData);
    }

    static setReservationAppData(value: reservationData) {
        localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(value));
    }

    static getCommentData() : movieCommentData {
        return (JSON.parse(localStorage.getItem(COMMENT_STORAGE_KEY) ?? "{}") as movieCommentData);
    }

    static setCommentData(value: movieCommentData) {
        localStorage.setItem(COMMENT_STORAGE_KEY, JSON.stringify(value));
    }
}

