import { createSlice } from '@reduxjs/toolkit';
import type { CreateSliceOptions, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import * as api from '../../api/kafka-replay';

const initialState = []

export const getMessages = (messages: { topic: string; keys: string[] }) => async (dispatch: Dispatch) => {
  try {
    const response = await api.searchMessages(messages)
    console.log('...response', response)
    dispatch(setMessages(response))
  } catch(err) {
    console.log('...err', err)
  }
}

const messageSlice = createSlice<unknown>({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      console.log('...action', action.payload)
      return action.payload;
    }
  }
})

export const { setMessages } = messageSlice.actions

export default messageSlice.reducer;