import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './styled';
// import { Button } from './components/atoms/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { map } from 'lodash';
import { getAllTopics, getKeys, getMessages } from './app/action/messageAction';
import Select from './components/atoms/select/Select';

function App() {
  const { topics, keys, messages, error } = useSelector(state => state.message);
  const [chosenTopic, setChosenTopic] = useState<unknown>(null);
  const dispatch = useDispatch();

  const topic = JSON.parse(localStorage.getItem('topics') as string)

  useEffect(() => {
    if(chosenTopic) handleSearchMessages();
    dispatch(getAllTopics());
    dispatch(getKeys(topic));

  }, [dispatch, chosenTopic]);

  console.log('...t:', topic)

  const handleSearchMessages = () => {
    const payload: { topic: string, keys: string[] } = {
      topic: 'some-topic_ms-kafka-failure_RETRY',
      // topic: topics[0],
      keys
    }
    dispatch(getMessages(payload));
  }

  return (
    <>
      <GlobalStyles />
      <span>{error}</span>
      <h1>Hello World!</h1>
      <Select setChosenTopic={setChosenTopic} topics={topics} />
      {chosenTopic && (
        <>
          <h1>messages</h1>
          {map(messages, message => map(message, msg => map(msg, (m, index) => (
            <div key={index}>
              <h4>{m?.topic}</h4>
              <p>{m?.payload}</p>
              <p>{m?.exceptionStacktrace}</p>
            </div>
          ))))}
        </>
      )}
    </>
  )
}

export default App
