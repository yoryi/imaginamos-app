import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import MovieRecomend from '../feature/movieRecomend';
import MovieTopRated from '../feature/movieTopRated';

const reducers = combineReducers({
  MovieRecomend,
  MovieTopRated,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export {store};
