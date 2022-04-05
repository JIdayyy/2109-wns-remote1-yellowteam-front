/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedWebsite } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'
import { setSelectedCategory } from 'src/redux/slices/form/createBug'

const useCreateBugState = () => {
  const dispatch = useDispatch()

  const { selectedWebsite, selectedCategory } = useSelector(
    (state: RootState) => state.createBug
  )

  const dispatchSelectedWebsite = (website: string) =>
    dispatch(setSelectedWebsite(website))

  const dispatchSelectedCategory = (category: string) => {
    dispatch(setSelectedCategory(category))
  }

  return {
    selectedWebsite,
    selectedCategory,
    dispatchSelectedCategory,
    dispatchSelectedWebsite,
  }
}

export default useCreateBugState
