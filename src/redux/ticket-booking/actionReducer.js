import { BOOK_TICKET, CANCEL_TICKET } from "./actionType"

const initialState = {
    ticket: []
}

const ticketBookingReducer = (state = initialState, action) => {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
        case BOOK_TICKET:
            return {
                ...state,
                ticket: [...state.ticket, {
                    id: `ticket-${state?.ticket?.length + 1}`,
                    ...action.payload
                }]
            }
        case CANCEL_TICKET:
            return {
                ...state,
                ticket: state.ticket.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default ticketBookingReducer;