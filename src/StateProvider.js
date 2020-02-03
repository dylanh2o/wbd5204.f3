import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
	user: null
};

const reducer = (state, action) => {

	switch (action.type) {
		case 'LOGIN':
			return Object.assign({}, state, {user: action.user});
		case 'LOGOUT':
			return Object.assign({}, state, {user: null});

		default:
			return state;
	}
};

const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export default ({children}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>

);
