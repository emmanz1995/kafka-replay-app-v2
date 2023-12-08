// import { kafkaReplayConnector } from '../kafka-replay-connector';
import kafkaReplayConnector from '../kafka-replay-connector/kafka-replay-connector';
import axios from 'axios';

interface IPayload {
  topic: string;
  keys: string[];
}

export const searchMessages = async (payload: { topic: string; keys: string[] }) => {
  // console.log('...payload:', payload)
  // const post = await kafkaReplayConnector('http://localhost:8090/internal/v2/messages/search', { method: 'POST', payload });
  // console.log('...post:', post)
  // return post
  let data;

  try {
    ({ data } = await axios({
      url: 'http://localhost:8090/internal/v2/messages/search',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: payload
    }))
  } catch(err) {
    console.log(err)
    return err;
  }
  return data;
}

export const replayMessages = (payload: IPayload) =>
  kafkaReplayConnector('http://localhost:8090/internal/v2/messages/retry', { method: 'POST', payload });

export const replayOneMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/retry/${id}`, { method: 'POST' });

export const getMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/${id}`, {});

export const deleteOneMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/${id}`, { method: 'DELETE' });

export const getTopics = () =>
  kafkaReplayConnector('http://localhost:8090/internal/v2/messages/topics', {});

export const getKeys = (topic: string = 'some-topic_ms-kafka-failure_RETRY') =>
  kafkaReplayConnector(`http://localhost:8090/internal/v2/messages/topics/some-topic_ms-kafka-failure_RETRY/keys`, {});

export const deleteAllMessages = (payload: IPayload) =>
  kafkaReplayConnector('/internal/messages/search', { method: 'DELETE', payload });