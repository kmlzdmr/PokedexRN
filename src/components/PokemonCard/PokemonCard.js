import React from 'react';
import { View, Text, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { colors, colorsDark } from "../../colors";
import styles from './PokemonCard.style';

const PokemonCard = ({ pokemon, onSelect }) => {

  const typeColor = pokemon.types[0] && colors[pokemon.types[0].type.name] ? colors[pokemon.types[0].type.name] : 'gray';
  const borderColor = pokemon.types[0] && colorsDark[pokemon.types[0].type.name] ? colorsDark[pokemon.types[0].type.name] : 'gray';
  const pokeballBackground = require('../../../assets/pokeball-white.png');

  function editName(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1)
    const index = text.indexOf('-');
    if (index !== -1) {
      return text.substring(0, index);
    }
    return text;
  }

  return (
    <TouchableWithoutFeedback onPress={onSelect}>

      <View style={[styles.card, { backgroundColor: typeColor, borderColor: borderColor }]}>

        <ImageBackground source={pokeballBackground}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}>
        </ImageBackground>

        <Image
          source={{ uri: pokemon.sprites.other.showdown.front_default }}
          style={styles.image}
        />

        <Text style={styles.name}>{editName(pokemon.name)}</Text>

      </View>

    </TouchableWithoutFeedback>
  );
};

export default PokemonCard;
