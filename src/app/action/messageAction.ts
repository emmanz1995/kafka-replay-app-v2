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

const setMessages = (payload: { topic: string; keys: string[] }) => ({
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

// TODO: this is supposed to be Array<string> but had to keep it as unknown for now while I debug
const setKeys = (keys: unknown) => ({
  type: messageTypes.GET_KEYS,
  payload: keys
})

const setKeysError = (err: object) => ({
  type: messageTypes.GET_KEYS_ERROR,
  payload: err
})

export const getMessages = (messages: { topic: string; keys: string[] }) => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.searchMessages(messages);
    dispatch(removeLoading());
    dispatch(setMessages(response));
    console.log('...response:', response);
    return response;
  } catch(err: unknown) {
    console.log(err);
    dispatch(removeLoading());
    dispatch(setMessagesError(err.message));
    throw err;
  }
}

export const getAllTopics = () => async(dispatch: Dispatch) => {
  try {
    const response = await api.getTopics();
    dispatch(setTopics(response));
    localStorage.setItem('topics', JSON.stringify(response[0]));
  } catch(err: unknown) {
    console.log(err);
    dispatch(setTopicError(err.message));
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
