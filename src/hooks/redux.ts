import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../store'

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
