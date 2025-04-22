import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number + 2}
        case 'numberMulti7':
            return {...state, number: state.number * 7}
        case 'numberDiv25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number: parseInt(state.number)}
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
        case 'login':
            return {...state, user: { name: action.payload }}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Logado' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'add2ToNumber'})}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberMulti7'})}>*7</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberInt'})}>Int</button>
                    
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAddN', payload: inputValue})}>
                        Adicionar {inputValue}
                    </button>
                    <input 
                        type="number" 
                        value={inputValue}
                        onChange={e => setInputValue(Number(e.target.value))}
                        className="input"
                    />
                </div>
            </div>
        </div>
    )
}

export default UseReducer