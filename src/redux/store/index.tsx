import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import ModeApp from '../feature/mode';
import MovieRecomend from '../feature/movieRecomend';
import MovieTopRated from '../feature/movieTopRated';

const reducers = combineReducers({
  ModeApp,
  MovieRecomend,
  MovieTopRated,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ModeApp'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export {store};
