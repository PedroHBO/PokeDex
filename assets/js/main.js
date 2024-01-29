const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const loadLessButton = document.getElementById("loadLessButton");
const limit = 12;
let offset = 0;
minRecords = 0;


function loadPokemonItens(offset, limit) {

    function firstLetter(txt) {
        return txt[0].toUpperCase() + txt.substring(1);
    }
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
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
        `).join("");
        pokemonList.innerHTML = newHtml
    });
}

loadPokemonItens(offset, limit)
loadLessButton.style.display = "none"
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
    loadLessButton.style.display = "block"
})
loadLessButton.addEventListener('click', () => {

    if (offset != minRecords) {
        offset -= limit
        loadPokemonItens(offset, limit)
        if (offset < limit) {
            loadLessButton.style.display = "none"
        }
    }
})