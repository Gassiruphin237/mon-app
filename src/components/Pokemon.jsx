import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route } from '../Config/Routes';
import PokemonDetail from './PokemonDetail';
import './Pokemon.css'

function Pokemon({ pokemon }) {

    const [listePokemonData, setListePokemonData] = useState([]);

    useEffect(() => {
        try {

            axios.get(Route.ListPokemon)
                .then(res => {
                    console.log(res.data.results)
                    setListePokemonData(res.data.results)

                })
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    listePokemonData.map((item, index) => (
                        <PokemonDetail pokemon={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokemon