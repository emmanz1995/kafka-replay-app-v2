// import { kafkaReplayConnector } from '../kafka-replay-connector';
// import kafkaReplayConnector from '../kafka-replay-connector/kafka-replay-connector';
import axios from 'axios';

interface IPayload {
  topic: string;
  keys: string[];
}

export const searchMessages = async (payload: { topic: string; keys: string[] }) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: 'http://localhost:8090/internal/v2/messages/search',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(payload)
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const replayMessages = async (payload: IPayload) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: 'http://localhost:8090/internal/v2/messages/retry',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(payload)
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const replayOneMessage = async (id: string) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: `http://localhost:8090/internal/v2/messages/retry/${id}`,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const getMessage = async (id: string) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: `http://localhost:8090/internal/v2/messages/${id}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const deleteOneMessage = async (id: string) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: `http://localhost:8090/internal/v2/messages/${id}`,
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const getTopics = async () => {
  let data: object;

  try {
    ({ data } = await axios({
      url: 'http://localhost:8090/internal/v2/messages/topics',
      method: 'GET',
      // headers: {
      //   'content-type': 'application/json'
      // }
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const getKeys = async (topic) => {
  let data: object;
  // maintaining-order-event_ms-kafka-failure_RETRY
  // some-topic_ms-kafka-failure_RETRY

  const url = new URL(`http://localhost:8090/internal/v2/messages/topics/${topic}/keys`)

  try {
    ({ data } = await axios({
      url: url.toString(),
      method: 'GET'
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export const deleteAllMessages = async (payload: IPayload) => {
  let data: object;

  try {
    ({ data } = await axios({
      url: 'http://localhost:8090/internal/v2/messages/retry',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(payload)
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}