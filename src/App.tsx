import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './styled';
// import { Button } from './components/atoms/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { map } from 'lodash';
// import Select from './components/atoms/select/Select';
import { getMessages } from './feature/message/messageSlice'
import { getAllTopics } from './feature/topics/topicsSlice'
import { getKeys } from './feature/keys/keysSlice'

function App() {
  const messages = useSelector(state => state.message);
  const topics = useSelector(state => state.topics);
  const keys = useSelector(state => state.keys);
  // const state = useSelector(state => state.message);
  // const [chosenTopic, setChosenTopic] = useState<unknown>(null);
  const dispatch = useDispatch();

  // const topic = JSON.parse(localStorage.getItem('topics') as string)

  useEffect(() => {
    if(chosenTopic) handleSearchMessages();
    dispatch(getAllTopics());
    dispatch(getKeys(topics[0]));

  }, [dispatch, chosenTopic]);

  // console.log('...M:', messages)
  // console.log('...T:', topics)
  // console.log('...K:', keys)
  // console.log('...messages:', state)

  const handleSearchMessages = () => {
    const payload: { topic: string, keys: string[] } = {
      topic: 'some-topic_ms-kafka-failure_RETRY',
      // topic: topics[0],
      keys: keys
    }
    dispatch(getMessages(payload));
  }

  return (
    <>
      <GlobalStyles />
      {/*<span>{error}</span>*/}
      <h1>Hello World!</h1>
      {/*<Select setChosenTopic={setChosenTopic} topics={topics} />*/}
      {/*{chosenTopic && (*/}
      {/*  <>*/}
      {/*    <h1>messages</h1>*/}
      {/*    {map(messages, message => map(message, msg => map(msg, (m, index) => (*/}
      {/*      <div key={index}>*/}
      {/*        <h4>{m?.topic}</h4>*/}
      {/*        <p>{m?.payload}</p>*/}
      {/*        <p>{m?.exceptionStacktrace}</p>*/}
      {/*      </div>*/}
      {/*    ))))}*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  )
}

export default App
