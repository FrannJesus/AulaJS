const fetchPokemon = () => {
    const pokemonPromises = []
    let html = ""

    for (let i = 1; i <= 150; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemn/' + i

        pokemonPromises.push(
            fetch(url).then(response => response.json())
        )
        
    }




}