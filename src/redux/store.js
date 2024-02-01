import {createStore} from 'redux';
import ticketBookingReducer from './ticket-booking/actionReducer';

const store = createStore(ticketBookingReducer);

export default store;