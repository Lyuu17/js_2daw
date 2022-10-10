import terminalImage from 'terminal-image';
import got from 'got';

const fetchPokemon = (cb) => {
    fetch('https://pokeapi.co/api/v2/pokemon\?limit=10')
      .then((response) => response.json())
      .then((allpokemon) => cb(allpokemon.results))
      .catch((e) => console.log(e))
}

fetchPokemon((res) => {
    const pokemon = "Bulbasaur";

    const e = res.find(e => pokemon.toLowerCase() == e.name.toLowerCase());
    if (!e)
    {
        console.error("not found");
        return;
    }

    fetch(e.url)
        .then((response) => response.json())
        .then(async (v) => {
            const buffer = await got(v.sprites.front_default).buffer();
            console.log(await terminalImage.buffer(buffer));
        })
        .catch((e) => console.error(e));
});