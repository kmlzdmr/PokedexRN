import axios from "axios";
import { useState, useEffect } from "react";

const useSingleFetch = (url) => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const { data: responseData } = await axios.get(url);
                setPokemon(responseData)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchPokemon();
    }, [])

    return {pokemon,loading,error}
}

export default useSingleFetch;