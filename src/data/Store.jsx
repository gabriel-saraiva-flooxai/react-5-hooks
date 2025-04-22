import React, { useState } from "react";

const initialState = {
    n: 40028920,
    txt: 'humm oq é esse número ai?'
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state, 
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            n: state.n,
            txt: state.txt,
            setN: n => updateState('n', n),
            setTxt: t => updateState('txt', t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store