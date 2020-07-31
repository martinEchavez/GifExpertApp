require('dotenv').config()

const { REACT_APP_URL, REACT_APP_LIMIT, REACT_APP_API_KEY } = process.env
const URL = REACT_APP_URL
const limit = REACT_APP_LIMIT
const api_key = REACT_APP_API_KEY

const getGifs = async (category) => {
    try {
        // encodeURI Elimina los espacios de la cadena de texto entre otras cosas
        const res = await fetch(`${URL}?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`)
        const { data } = await res.json()

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized.url,
            }
        })
        return gifs
    } catch (error) {
        alert('Sorry, data not found', error)
    }
}

export default getGifs