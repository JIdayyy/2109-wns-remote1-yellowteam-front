import { useDispatch, useSelector } from 'react-redux'
import { setStatus, setWebsite } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useCreateBug = (): {
  website: string
  dispatchWebSite: (payload: string) => { payload: string; type: string }
  dispatchStatus: (payload: string) => { payload: string; type: string }
  status: string
} => {
  const dispatch = useDispatch()

  const { website, status } = useSelector((state: RootState) => state.createBug)

  const dispatchWebSite = (payload: string) => dispatch(setWebsite(payload))

  const dispatchStatus = (payload: string) => dispatch(setStatus(payload))

  return { website, dispatchWebSite, dispatchStatus, status }
}

export default useCreateBug
