import {API_KEY, ASTEROID_DETATILS_API, RANDOM_ID_API} from './Constants';

export const getGetRandomAsteroidId = async () => {
    const result = await fetch(RANDOM_ID_API);
    
    if(result.status != 200){
        return null
    }

    return await result.json();
}

export const getAsteroidDetails = async (asteroidId) => {
    const url = `${ASTEROID_DETATILS_API}${asteroidId}?api_key=${API_KEY}`;
    const result = await fetch(url);
    
    if(result.status != 200){
        return null
    }

    return await result.json();
}