export enum messageTypes {
  GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING',
  GET_MESSAGES = 'GET_MESSAGES',
  GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR',
  RETRY_SENDING_MESSAGE_PENDING = 'RETRY_SENDING_MESSAGE_PENDING',
  RETRY_SENDING_MESSAGE = 'RETRY_SENDING_MESSAGE',
  RETRY_SENDING_MESSAGE_ERROR = 'RETRY_SENDING_MESSAGE_ERROR',
  PENDING = 'PENDING',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
  DELETE_MESSAGE_ERROR = 'DELETE_MESSAGE_ERROR',
  GET_TOPICS = 'GET_TOPICS',
  GET_TOPICS_ERROR = 'GET_TOPICS_ERROR',
  GET_KEYS = 'GET_KEYS',
  GET_KEYS_ERROR = 'GET_KEYS_ERROR'
}