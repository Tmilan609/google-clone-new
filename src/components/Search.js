/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';
import { useStateValue } from '../SearchProvider.js';
import { SET_SEARCH_TERM } from '../types.js';
import { useState } from 'react';

const SearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 30px;
    padding: 10px 15px;
    width: 500px;
    margin: 0px auto;
    border-radius: 999px;
    input {
        flex: 1;
        paddinh: 8px 13px;
        font-size: medium;
        border: 0;
        outline: 0;
    }
    .searchicon {
        color:gray;
    }
`


const SearchButton = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    button {
        margin: 5px;
        background: #f8f8f8 !important;
        border: 1px solid white;
        text-transform: inherit;
        &:hover {
            margin: 5px;
            background: #f8f8f8 !important;
            color: #000;
            border: 1px solid #c6c6c6
        }
    }
`


const Search = ({ hide }) => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const[{}, dispatch] = useStateValue();

    const search = e => {
        e.preventDefault();
        dispatch({
            type: SET_SEARCH_TERM,
            term: input
        })
        console.log(input);
         navigate.push("/search");
      
    }

    return (
        <form onSubmit={search}>
            <SearchInput>
                <SearchIcon className='searchicon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
                </SearchInput>
                {!hide && (
                    <SearchButton>
                        <Button type="submit" variant="outlined">Google Search</Button>
                        <Button variant="outlined">I am feeling lucky</Button>
                    </SearchButton>
                )
            }
        </form>
    )
}

export default Search;