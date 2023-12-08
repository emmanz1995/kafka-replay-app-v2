import messageReducer from './messageReducer';

describe('message reducer state', () => {
  it('should get message state', () => {
    const state = {
      messages: [{ id: '1', topic: 'some-topic', key: 'HomerSimpsonRules', payload: "{ 'Homer': 'Simpson' }" }]
    }
    const action = { type: 'GET_MESSAGES', payload: state }

    const newMessage = messageReducer(state, action)
    expect(newMessage.messages).toEqual({messages: [{ id: '1', topic: 'some-topic', key: 'HomerSimpsonRules', payload: "{ 'Homer': 'Simpson' }" }]})
  });

  // it('should get topic state', () => {
  //   const state = ['some-topic']
  //   const action = { type: 'GET_TOPICS', payload: ['some-topic'] }
  //
  //   const topics = messageReducer(state, action)
  //   expect(topics).toEqual(['some-topic'])
  // })
})