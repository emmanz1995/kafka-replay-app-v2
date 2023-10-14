const ErrorHandler = (error: object, ...args: unknown) => {
  console.log(error);
  const UNEXPECTED_ERROR_MESSAGE = 'Unable to make any requests at the time being. Please try again';
  switch(error.errorCode) {
    case 'MS_KAFA_REPLAY-000':
      return `Internal Error has occured due to: ${args}`;
    case 'MS_KAFA_REPLAY-001':
      return `${args}`;
    case 'MS_KAFA_REPLAY-002':
      return `Malformed JSON request JSON parse error due to: ${args}`;
    case 'MS_KAFA_REPLAY-003':
      return `Kafka Replay not found for ID:${args}`;
    case 'MS_KAFA_REPLAY-004':
      return `Not able to Retry Current Message for ID:${args}. Please try to Replay previous message with ID:${args} in order to Replay the Current Message`;
    case 'MS_KAFA_REPLAY-005':
      return `Position Reference not found for Message ID:${args}. Please Investigate and fix this`;
    default: return UNEXPECTED_ERROR_MESSAGE;
  }
}

export default ErrorHandler;