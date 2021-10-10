import './search.scss'
import { useState,useEffect } from 'react'
import api from '../../../utils/api';
import SearchResultItem from './SearchResultItem';
import React from 'react'
import IUser from '../../../types/User.type';

const Search: React.FC = () => {

    const [query,setQuery] = useState<string>('');
    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if(!!query){
            api.post('/api/search',{
                term: query
            })
            .then(res => {
                setUsers(res.data);
            })
        }else{
            setUsers([]);
        }
    },[query]);

    const SearchResult = (): JSX.Element => {
        return(
            <div className="search-result">
                <div className="triangle"></div>
                <div className="search-result__users">
                    {users?.map(user => <SearchResultItem data={user} key={user.id}/>)}
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