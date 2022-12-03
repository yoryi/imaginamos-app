/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getTopRated} from '../../services/endpoints';

const initialState = {
  topRated: [],
  status: null,
};

export const fetchMovieTopRated = createAsyncThunk('topRated', async () => {
  const response = await getTopRated();
  return response.data;
});

export const Movie = createSlice({
  name: 'TopRated',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieTopRated.pending]: (state: {status: string}, action: any) => {
      state.status = 'loading';
    },
    [fetchMovieTopRated.fulfilled]: (
      state: {status: string; topRated: object},
      action: {payload: any},
    ) => {
      state.status = 'succeeded';
      state.topRated = action.payload;
    },
    [fetchMovieTopRated.rejected]: (
      state: {status: string; error: any},
      action: {payload: any},
    ) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default Movie.reducer;
