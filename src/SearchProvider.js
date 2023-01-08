/* eslint-disable react/prop-types */
/* eslinit-disable no-unused-vars */

import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const SearchProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue =()=>useContext(StateContext);
export default SearchProvider;