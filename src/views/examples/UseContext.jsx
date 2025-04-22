// Comum utilizar o UseReducer juntamente com Context API

import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            n: state.n + delta
        })
    }

    const {n, txt, setN, setTxt} = useContext(AppContext)

    useEffect(function() {
        if (n !== 40028922) {
            setTxt("humm oq é esse número ai?")
        } else {
            setTxt('Esse é o som do japonês que vai dar PlayStation 3!')
        }
    }, [n])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{state.txt}</span>
                <span className="text red">{state.n}</span>

                <div>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                        onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{n}</span>
                <span className="text">{txt}</span>
                <div>
                    <button className="btn"
                        onClick={() => setN(n - 1)}>-1</button>
                    <button className="btn"
                        onClick={() => setN(n + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
