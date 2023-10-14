// import { kafkaReplayConnector } from '../kafka-replay-connector';
import kafkaReplayConnector from '../kafka-replay-connector/kafka-replay-connector';

interface IPayload {
  topic: string;
  keys: string[];
}

export const searchMessages = (payload: Array<IPayload>) =>
  kafkaReplayConnector('/internal/messages/search', { method: 'POST', payload });

export const replayMessages = (payload: IPayload) =>
  kafkaReplayConnector('/internal/messages/retry', { method: 'POST', payload });

export const replayOneMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/retry/${id}`, { method: 'POST' });

export const getMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/${id}`, {});

export const deleteOneMessage = (id: string) =>
  kafkaReplayConnector(`/internal/messages/${id}`, { method: 'DELETE' });

export const getTopics = () =>
  kafkaReplayConnector('http://localhost:8090/internal/v2/messages/topics', {});

export const getKeys = (TOPIC: string) =>
  kafkaReplayConnector(`/internal/messages/topics/${TOPIC}/keys`, {});

export const deleteAllMessages = (payload: IPayload) =>
  kafkaReplayConnector('/internal/messages/search', { method: 'DELETE', payload});