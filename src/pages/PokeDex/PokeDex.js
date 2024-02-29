import { View, FlatList, ActivityIndicator, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import TypeCard from '../../components/TypeCard';
import useFetch from '../../hooks/useFetch';
import { StatusBar } from 'expo-status-bar';

const colors = {
    "grass": '#78c850',
    'fire': '#f08030',
    'normal': '#81815c',
    'water': '#6890f0',
    'electric': '#f8d030',
    'ice': '#98d8d8',
    'fighting': '#c03028',
    'poison': '#cf7dbf',
    'ground': '#e0c068',
    'flying': '#a890f0',
    'bug': '#a8b820',
    'rock': '#bba442',
    'ghost': '#705898',
    'dragon': '#7038f8',
    'dark': '#705848',
    'steel': '#b8b8d0',
    'fairy': '#f0b6bc',
    'psychic': '#b14b73',
}

const colorsDark = {
    "grass": '#588746',
    'fire': '#b2432e',
    'normal': '#6a6a61',
    'water': '#3875b2',
    'electric': '#d8b244',
    'ice': '#64a9cc',
    'fighting': '#78433a',
    'poison': '#6a3f5e',
    'ground': '#958248',
    'flying': '#6b75b2',
    'bug': '#6f7828',
    'rock': '#786f4c',
    'ghost': '#4c4c78',
    'dragon': '#5d54a2',
    'dark': '#3e312b',
    'steel': '#6f6f78',
    'fairy': '#a472a4',
    'psychic': '#8a3a59',
}

const PokemonList = ({ navigation }) => {

    const { loading, pokemonList } = useFetch();
    const [searchText, setSearchText] = useState('');

    const handleSelect = id => {
        navigation.navigate('DetailScreen', { id });
    }

    const searchPokemon = text => {
        setSearchText(text);
    }

    const filterPokemonList = (pokemonList, searchText) => {
        return pokemonList.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    const filteredPokemonList = filterPokemonList(pokemonList, searchText);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar hidden />

            <TextInput
                value={searchText}
                onChangeText={searchPokemon}
                placeholder='Search Pokemon...'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5, borderRadius: 10 }}
            />
            
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true}>
                    {Object.keys(colors).map((typeName, index) => {
                        return <TypeCard key={index} type={typeName} color={colors[typeName]} colorDark={[colorsDark[typeName]]} />;
                    })}
                </ScrollView>
            </View>

            <TouchableOpacity style={{ flex: 1 }}>
                <FlatList
                    initialNumToRender={12}
                    numColumns={3}
                    data={filteredPokemonList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PokemonCard pokemon={item} onSelect={() => { handleSelect(item.id.toString()) }} />}
                />
            </TouchableOpacity>

        </View>
    );
};

export default PokemonList;
