/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/redux/reducers'
import { toggleBugList } from 'src/redux/slices/bug'

const useBugState = () => {
  const dispatch = useDispatch()

  const { isBugListOpen } = useSelector((state: RootState) => state.bug)

  const dispatchToggleBugList = () => dispatch(toggleBugList())

  return {
    isBugListOpen,
    dispatchToggleBugList,
  }
}

export default useBugState
