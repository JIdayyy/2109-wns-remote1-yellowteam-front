/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedBug } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useUploadFileState = () => {
  const dispatch = useDispatch()

  const { selectedBug } = useSelector((state: RootState) => state.uploadFile)

  const dispatchSetSelectedBug = (bug: string) => dispatch(setSelectedBug(bug))

  return {
    selectedBug,
    dispatchSetSelectedBug,
  }
}

export default useUploadFileState
