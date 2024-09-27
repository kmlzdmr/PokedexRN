import axios from "axios";
import { useState, useEffect } from "react";


const useFetch = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000');
                const results = response.data.results;
                const pokemonDataPromises = results.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url);
                    return response.data;
                });
                const pokemonDataList = await Promise.all(pokemonDataPromises);
                setPokemonList(pokemonDataList);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    return { loading, pokemonList }
}

export default useFetch;
