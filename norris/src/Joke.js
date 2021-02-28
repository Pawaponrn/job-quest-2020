import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Joke() {
    const url = 'http://api.icndb.com/jokes/random'
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setJoke(response.data)
            })
    }, [url])

    if (joke) {
        return (
            <p>{joke.value.joke}</p>
        )
    }

    return (
        <div>
            No joke found.
        </div>
    )
}

export default Joke;