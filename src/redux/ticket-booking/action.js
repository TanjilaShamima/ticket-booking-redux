import { BOOK_TICKET, CANCEL_TICKET } from "./actionType"

export const bookTicket = (value) => {
    console.log("value", value);
    return {
        type: BOOK_TICKET,
        payload: value
    }
}

export const cancelTicket = (value) => {
    return {
        type: CANCEL_TICKET,
        payload: value
    }
}