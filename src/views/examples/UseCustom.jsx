import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()
    const url = "http://files.cod3r.com.br/curso-react/estados.json"
    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => <li key={state.nome}> {state.nome} - {state.sigla} </li>)
    }

    // fetch('http://files.cod3r.com.br/curso-react/estados.json')
    //     .then(resp => resp.json())
    //     .then(json => console.log(json))

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button className="btn"
                            onClick={() => inc()}>inc</button>
                        <button className="btn"
                            onClick={() => dec()}>dec</button>
                    </div>
            </div>
            <SectionTitle title="Exercício #02" />
                <div className="center">
                    <ul>
                        {!response.loading ? showStates(response.data) : false}
                    </ul>
                </div>
        </div>
    )
}

export default UseRef
