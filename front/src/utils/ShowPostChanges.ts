import { useDispatch } from 'react-redux'
import { updatePosts } from '../store/actions/updatePosts'

export const useShowPostChanges = () => {
    const dispatch = useDispatch();
    dispatch(updatePosts());
}
