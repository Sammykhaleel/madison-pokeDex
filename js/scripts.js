let pokemonList = [
    {name: 'Bulbasaur', height: 2, type: ['grass', 'poison']},
    {name: 'Charizard', height: 5, type: ['fire', 'flying']},
    {name: 'Torterra', height: 7, type: ['grass', 'ground']},
    {name: 'Morgrem', height: 2, type: ['dark', 'fairy']}
];

for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height > 5) {
        document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + '\') '+ ' - Wow, that\'s a tall Pokemon!' + '<br>');
    } else {
        document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + '\') '+ '<br>');
    }
}