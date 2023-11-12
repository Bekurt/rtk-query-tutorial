import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../redux/store'

export const useTypeDispatch: () => Dispatch = useDispatch
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
