/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getMoviePopular} from '../../services/endpoints';

const initialState = {
  movie: [],
  status: null,
};

export const fetchMovieRecomend = createAsyncThunk('movie', async () => {
  const response = await getMoviePopular();
  return response.data;
});

export const Movie = createSlice({
  name: 'MovieRecomend',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieRecomend.pending]: (state: {status: string}, action: any) => {
      state.status = 'loading';
    },
    [fetchMovieRecomend.fulfilled]: (
      state: {status: string; movie: object},
      action: {payload: any},
    ) => {
      state.status = 'succeeded';
      state.movie = action.payload;
    },
    [fetchMovieRecomend.rejected]: (
      state: {status: string; error: any},
      action: {payload: any},
    ) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default Movie.reducer;
