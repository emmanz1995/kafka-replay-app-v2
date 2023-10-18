import { messageTypes } from '../types';

const initialState = {
  loading: false,
  messages: [],
  error: '',
  topics: [],
  keys: []
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
    case messageTypes.GET_KEYS:
      return {
        ...state,
        loading: false,
        keys: payload,
        error: '',
      }
    case messageTypes.GET_KEYS_ERROR:
      return {
        ...state,
        loading: false,
        keys: [],
        error: payload,
      }
    default: return state;
  }
}

export default messageReducer