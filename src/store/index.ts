// import { InitialState } from './../interfaces/InitialState/index'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import appReducer from './reducer'
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
