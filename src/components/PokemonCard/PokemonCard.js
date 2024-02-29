import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const PokemonCard = ({ pokemon, onSelect }) => {

  const colors = {
    "grass" : '#78c850',
    'fire' : '#f08030',
    'normal': '#81815c',
    'water': '#6890f0',
    'electric': '#f8d030',
    'ice': '#98d8d8',
    'fighting': '#c03028',
    'poison': '#cf7dbf',
    'ground': '#e0c068',
    'flying': '#a890f0',
    'bug' : '#a8b820',
    'rock' : '#bba442',
    'ghost' : '#705898',
    'dragon' : '#7038f8',
    'dark' : '#705848',
    'steel' : '#b8b8d0',
    'fairy' : '#f0b6bc',
    'psychic': '#b14b73',
    }

  const typeColor = pokemon.types[0] && colors[pokemon.types[0].type.name] ? colors[pokemon.types[0].type.name] : 'gray';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.card, { backgroundColor: typeColor }]}>
        <Image
          source={{ uri: pokemon.sprites.other.showdown.front_default }}
          style={styles.image}
        />
        <Text style={styles.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    color:'white',
  },
  type: {
    fontSize: 14,
  },
});

export default PokemonCard;
