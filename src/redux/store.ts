import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, Context } from 'next-redux-wrapper'
import { Store } from 'redux'
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const makeStore = (context: Context) =>
  configureStore({
    reducer: rootReducer,
  })

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})

export default store;
