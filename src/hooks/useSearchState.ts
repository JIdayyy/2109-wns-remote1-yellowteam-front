import { useDispatch, useSelector } from 'react-redux'
import { reset, setSearchedWebsite } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useSearchState = (): {
  website: string
  dispatchResetSearchState: () => { payload: undefined; type: string }
  dispatchSearchedWebsite: (payload: string) => {
    payload: string
    type: string
  }
} => {
  const dispatch = useDispatch()

  const { website } = useSelector((state: RootState) => state.search)

  const dispatchSearchedWebsite = (payload: string) =>
    dispatch(setSearchedWebsite(payload))

  const dispatchResetSearchState = () => dispatch(reset())

  return { website, dispatchSearchedWebsite, dispatchResetSearchState }
}

export default useSearchState
