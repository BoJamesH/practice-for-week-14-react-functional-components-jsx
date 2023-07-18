// Showcase.js
import React from 'react';

function Showcase() {
  // Vanilla JS variable
  const favPokemon = 'Bulbasaur';

  // Object literal
  const pokeCharacteristics = {
    type: 'Grass',
    move: 'Vine Whip',
  };

  // Inline styles
  const greenBackground = { backgroundColor: 'green', color: 'white' };
  const whiteBackgroundGreenText = { backgroundColor: '#ffffff', color: 'green' };

  return (
    <div>
      <h1>{favPokemon}'s Showcase</h1>
      <h2>
        <span style={greenBackground}>{favPokemon}'s type is {pokeCharacteristics.type}</span>
        <span style={whiteBackgroundGreenText}> and one of their moves is {pokeCharacteristics.move}.</span>
      </h2>
    </div>
  );
}

export default Showcase;