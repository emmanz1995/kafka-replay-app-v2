import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '../../feature/message/messageSlice';
import keysSlice from '../../feature/keys/keysSlice';
import topicsSlice from '../../feature/topics/topicsSlice';


export const store = configureStore({
  reducer: {
    message: messageSlice,
    keys: keysSlice,
    topics: topicsSlice
  },
  devTools: true
})

export default store;