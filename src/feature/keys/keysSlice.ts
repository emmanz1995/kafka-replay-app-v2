import { createSlice } from '@reduxjs/toolkit';
import type { CreateSliceOptions, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import * as api from '../../api/kafka-replay';

const initialState = []

export const getKeys = (topic: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.getKeys(topic);
    await dispatch(setKeys(response));
  } catch(err) {
    // dispatch(setKeysError(err));
    console.log(err);
  }
}

const messageSlice = createSlice<unknown>({
  name: 'keys',
  initialState,
  reducers: {
    setKeys:(state, action) => {
      console.log('...action3', action.payload)
      return action.payload
    },
  }
})

export const { setKeys } = messageSlice.actions

export default messageSlice.reducer;