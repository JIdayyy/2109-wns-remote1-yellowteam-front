import { useDispatch, useSelector } from 'react-redux'
import { reset, setSelectedWebsite } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useSearchState = (): {
  website: string
  dispatchResetSearchState: () => { payload: undefined; type: string }
  dispatchSelectedWebsite: (payload: string) => {
    payload: string
    type: string
  }
} => {
  const dispatch = useDispatch()

  const { website } = useSelector((state: RootState) => state.search)

  const dispatchSelectedWebsite = (payload: string) =>
    dispatch(setSelectedWebsite(payload))

  const dispatchResetSearchState = () => dispatch(reset())

  return { website, dispatchSelectedWebsite, dispatchResetSearchState }
}

export default useSearchState
