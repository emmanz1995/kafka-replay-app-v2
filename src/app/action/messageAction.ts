import { messageTypes } from '../types';
import {Dispatch} from 'redux';
import * as api from '../../api/kafka-replay';

interface IPayload {
  topic: string;
  keys: string[];
}

const setLoading = () => ({
  type: messageTypes.GET_MESSAGES_PENDING,
  payload: true,
});

const removeLoading = () => ({
  type: messageTypes.GET_MESSAGES_PENDING,
  payload: false
})

const setMessages = (payload: Array<IPayload>) => ({
  type: messageTypes.GET_MESSAGES,
  payload
});

const setTopicError = (err: object) => ({
  type: messageTypes.GET_TOPICS_ERROR,
  payload: err
});

const setMessagesError = (err: object) => ({
  type: messageTypes.GET_MESSAGES_ERROR,
  payload: err
})

//TODO: this is supposed to be Array<string> but had to keep it as unknown for now while I debug
const setTopics = (payload: unknown) => ({
  type: messageTypes.GET_TOPICS,
  payload
});

//TODO: this is supposed to be Array<string> but had to keep it as unknown for now while I debug
const setKeys = (keys: unknown) => ({
  type: messageTypes.GET_KEYS,
  payload: keys
})

const setKeysError = (err: object) => ({
  type: messageTypes.GET_KEYS_ERROR,
  payload: err
})

export const getMessages = (dispatch: Dispatch) => async (messages: Array<IPayload>) => {
  dispatch(setLoading());
  try {
    const response = api.searchMessages(messages);
    dispatch(removeLoading());
    dispatch(setMessages(messages));
    return response;
  } catch(err) {
    console.log(err);
    dispatch(removeLoading());
    dispatch(setMessagesError(err));
    throw err;
  }
}

export const getAllTopics = () => async(dispatch: Dispatch) => {
  try {
    const response = await api.getTopics();
    dispatch(setTopics(response));
  } catch(err: unknown) {
    console.log(err);
    dispatch(setTopicError(err));
    throw err;
  }
}

export const getKeys = (topic: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.getKeys(topic);
    dispatch(setKeys(response));
  } catch(err) {
    dispatch(setKeysError(err));
    console.log(err);
  }
}
