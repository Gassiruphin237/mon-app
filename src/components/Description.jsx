import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Route } from '../Config/Routes';
import './Description.css'
function Description() {

    const { id } = useParams();

    const [image, setImage] = useState("");
    const [weight, setWeight] = useState("");

    const [heigth, setHeigth] = useState("")
    useEffect(() => {
        try {
            axios.get(Route.Pokemon + id).then(res => {
                console.log(res.data)
                setImage(res.data.sprites.other.dream_world.front_default)
                setWeight((res.data.weight) / 10 + " kg")
                setHeigth(res.data.height + "Cm")


            })
        } catch (error) {
            console.log(error)
        }
    }, [id])

    return (
        <div className='container'>
            <div className="row">
                <div className="gauche">
                    <Box boxShadow='xl' p='10' width={300} rounded='md' bg='#F2F2F2'>
                        <img
                            src={image} alt="poke" width={400}
                            height={200} srcset="" />
                    </Box>
                </div>
                <div className="droite">
                    <div className="haut">
                        <Box boxShadow='xl' p='10' width={300} rounded='md' bg='white'>
                            <Text>
                                Les feuilles qui poussent sur le corps de Massko sont bien pratiques lorsqu’il veut se camoufler dans la forêt. Ce Pokémon est passé maître dans l’art de grimper aux arbres.
                            </Text>
                        </Box>
                    </div><br />
                    <div className="bas">
                        <Box boxShadow='xl' p='50' rounded='md' bg='#30a7d7'>
                            <span style={{ color: 'white' }}>Taille : </span> <strong> {heigth}</strong><br />
                            <span style={{ color: 'white' }}>Poids :</span> <strong> {weight}</strong>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description