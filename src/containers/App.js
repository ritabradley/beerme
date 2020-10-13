import React from 'react'
import axios from 'axios';

const url = "https://api.punkapi.com/v2/beers"

// axios.get(url).then(response => {
//     const beers = response.data.map(beer => beer.name)
//     console.log(beers)
// })

const App = () => {
    return (
        <div className="container"><h1 className="text-4xl">Beer.me</h1> </div>
    )
}

export default App;
