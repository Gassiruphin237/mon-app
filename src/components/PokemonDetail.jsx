import React, { useEffect, useState } from 'react'
import { Badge, Card, CardBody, CardHeader, Heading, Image, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonDetail({ pokemon }) {

    const [image, setImage] = useState("");
    const [id, setId] = useState(null);
    useEffect(() => {

        try {
            axios.get(pokemon.url)
                .then(res => {
                    setImage(res.data.sprites.other.dream_world.front_default)
                    setId(res.data.id)
                })

        } catch (error) {
            console.log(error)
        }


    })
    return (
        <div>
            <Link to={"view/" + id}>
                <Card maxW='sm' style={{ cursor: 'pointer' }} >
                    <CardBody>
                        <CardHeader align='center' style={{ background: '#F2F2F2', borderRadius: '3%' }}>
                            <Image
                                src={image}
                                alt={pokemon.name}
                                borderRadius='sm'
                                width={200}
                                height={200}
                            />
                        </CardHeader>
                        <Stack mt='6' spacing='3'>
                            <Text color='gray' fontSize='1X1'>
                                N° {"0" + id}
                            </Text>
                            <Heading size='md'>{pokemon.name}</Heading>
                            <Badge variant='solid' style={{ borderRadius: '6%', height: 20, textTransform: 'lowercase' }} colorScheme='green' width={20}>
                                plante
                            </Badge>
                        </Stack>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default PokemonDetail