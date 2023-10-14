import { messageTypes } from '../types';

const initialState = {
  loading: false,
  messages: [],
  error: '',
  topics: []
};

const messageReducer = (state: unknown = initialState, action: unknown) => {
  const { type, payload } = action;
  switch(type) {
    case messageTypes.PENDING:
      return {
        ...state,
        loading: true,
        messages: [],
        error: ''
      }
    case messageTypes.GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        error: '',
        loading: false
      }
    case messageTypes.GET_TOPICS:
      return {
        ...state,
        topics: payload,
        error: '',
        loading: false,
      }
    case messageTypes.GET_TOPICS_ERROR:
      return {
        ...state,
        topics: [],
        error: payload,
        loading: false,
      }
    default: return state;
  }
}

export default messageReducer