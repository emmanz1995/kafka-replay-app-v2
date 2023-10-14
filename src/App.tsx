import React, { useEffect } from 'react';
import { GlobalStyles } from './styled';
import { Button } from './components/atoms/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { map } from 'lodash';
import { getAllTopics } from './app/action/messageAction';

function App() {
  const {topics, error} = useSelector(state => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    if(topics)
      dispatch(getAllTopics())
  }, [dispatch])
  console.log(topics)
  return (
    <>
      <GlobalStyles />
      <h1>Hello World!</h1>
      {map(topics, topic => <Button topic={topic} key={topic} />)}
    </>
  )
}

export default App
