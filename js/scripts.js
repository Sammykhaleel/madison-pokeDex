let pokemonList = [
  { name: "Bulbasaur", height: 2, type: ["grass", "poison"] },
  { name: "Charizard", height: 5, type: ["fire", "flying"] },
  { name: "Torterra", height: 7, type: ["water", "ground"] },
  { name: "Morgrem", height: 2, type: ["dark", "fairy"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  let size = "";
  if (pokemonList[i].height > 6) {
    size = " This is a big Pokemon!";
  } else if (pokemonList[i].height < 3) {
    size = " This is a small Pokemon!";
  } else {
    size = " This is an average Pokemon!";
  }
  let color = "";
  for (let k = 0; k < pokemonList[i].type.length; k++){
      if(pokemonList[i].type[k] == "water"){
          color = '<span style = "color: blue;">'
      } else if(pokemonList[i].type[k] == "fire"){
          color = '<span style = "color: red;">'
      } else if(pokemonList[i].type[k] == "grass"){
          color = '<span style = "color: green;">'
      } else if(pokemonList[i].type[k] == "dark"){
          color = '<span style = "color: purple;">'
      }
  }
  document.write(
      '<div class = "box">' +
    pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ")" +
      size +
      color +
      "<br>" +
      pokemonList[i].type +
      "<br>" +
      '</div>'
  );
}
