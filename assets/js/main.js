function firstLetter(txt) {
    return txt[0].toUpperCase() + txt.substring(1);
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types img">
                ${pokemon.types.map((type) => `<li class="type ${type}">${firstLetter(type)}</li>`).join('')}
                </ol>
            <img class="img" src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
