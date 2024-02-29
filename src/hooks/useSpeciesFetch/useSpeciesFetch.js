import axios from "axios";
import { useState, useEffect } from "react";



const useSpeciesFetch = (url) => {

    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const { data: responseData } = await axios.get(url);
                setSpecies(responseData)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchSpecies();
    }, [])

    return {species,loading,error}
}

export default useSpeciesFetch;