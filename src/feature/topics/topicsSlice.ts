import { createSlice } from '@reduxjs/toolkit';
import type { CreateSliceOptions, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import * as api from '../../api/kafka-replay';

const initialState = []

export const getAllTopics = () => async(dispatch: Dispatch) => {
  try {
    const response = await api.getTopics();
    dispatch(getTopics(response));
  } catch(err: unknown) {
    console.log(err);
    // dispatch(setTopicError(err.message));
    throw err;
  }
}

const messageSlice = createSlice<unknown>({
  name: 'topics',
  initialState,
  reducers: {
    getTopics:(state, action) => {
      console.log('...action2', action.payload)
      return action.payload
    },
  }
})

export const { getTopics } = messageSlice.actions

export default messageSlice.reducer;