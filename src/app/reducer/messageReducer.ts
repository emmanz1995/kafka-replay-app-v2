import { messageTypes } from '../types';

interface MessageState {
  loading: boolean;
  messages: any[]; // Replace 'any' with the actual type of your messages
  error: string;
  topics: string[]; // Replace 'any' with the actual type of your topics
  keys: string[]; // Replace 'any' with the actual type of your keys
}

const initialState: MessageState = {
  loading: false,
  messages: [],
  error: '',
  topics: [],
  keys: []
};

const messageReducer = (state: { messages: { payload: string; topic: string; id: string; key: string }[] } = initialState, action: { payload: { messages: { payload: string; topic: string; id: string; key: string }[] }; type: string }) => {
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
    case messageTypes.GET_MESSAGES_ERROR:
      return {
        ...state,
        messages: [],
        error: payload,
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