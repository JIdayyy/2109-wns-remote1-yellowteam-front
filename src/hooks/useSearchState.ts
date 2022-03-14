import { useDispatch, useSelector } from 'react-redux'
import { reset, setBugOnSearch } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useSearchState = (): {
  website: string
  dispatchResetSearchState: () => { payload: undefined; type: string }
  dispatchSetBugOnSearch: (payload: string) => { payload: string; type: string }
} => {
  const dispatch = useDispatch()

  const { website } = useSelector((state: RootState) => state.search)

  const dispatchSetBugOnSearch = (payload: string) =>
    dispatch(setBugOnSearch(payload))

  const dispatchResetSearchState = () => dispatch(reset())

  return { website, dispatchSetBugOnSearch, dispatchResetSearchState }
}

export default useSearchState
