import './search.scss'
import { useState,useEffect } from 'react'
import api from '../../../utils/api';
import SearchResultItem from './SearchResultItem';

const Search = () => {

    const [query,setQuery] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(() => {
        if(!!query){
            api.post('/api/search',{
                term: query
            })
            .then(res => {
                setUsers(res.data);
            })
        }else{
            setUsers(null);
        }
    },[query]);

    const SearchResult = () => {
        return(
            <div className="search-result">
                <div className="triangle"></div>
                <div className="search-result__users">
                    {users?.map(user => <SearchResultItem user={user}/>)}
                </div>
            </div>
        )
    }

    return(
        <div className="search-box">
            <div>
                <input onChange={(e) => { setQuery(e.target.value) }} className="search" placeholder="Search"/>
            </div>
             { !!query && !!users?.length && <SearchResult/>} 
        </div>
    )
}

export default Search