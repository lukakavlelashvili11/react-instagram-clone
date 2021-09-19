import { useDispatch } from 'react-redux'
import { updatePosts } from '../store/actions/updatePosts'

export const useUpdatePosts = () => {
    useDispatch(updatePosts());
}