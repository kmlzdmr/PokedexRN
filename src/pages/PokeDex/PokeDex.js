import { View, FlatList, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import TypeCard from '../../components/TypeCard';
import useFetch from '../../hooks/useFetch';
import { StatusBar } from 'expo-status-bar';
import { colors, colorsDark } from "../../colors";
import Loading from '../../components/Loading';

const PokemonList = ({ navigation }) => {

    const { loading, pokemonList } = useFetch();
    const [searchText, setSearchText] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleSelect = id => {
        navigation.navigate('DetailScreen', { id });
    }

    const handleSelectType = type => {                      // Update Type
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
        }
        else if (selectedTypes.length >= 2) {
            Alert.alert("Maksimum 2 tip seçebilirsin")
        }
        else {
            setSelectedTypes([...selectedTypes, type]);
        }
    }

    const searchPokemon = text => {
        setSearchText(text);
    }

    const filterPokemonList = (pokemonList, searchText) => {
        return pokemonList.filter(pokemon => {
            const includesSearchText = pokemon.name.toLowerCase().includes(searchText.toLowerCase());
            const includesSelectedTypes = selectedTypes.length === 0 || pokemon.types.some(type => selectedTypes.includes(type.type.name));
            return includesSearchText && includesSelectedTypes;
        })
    }

    {/* Loading */}
    if (loading) {                                            
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loading />
            </View>
        );
    }

    const filteredPokemonList = filterPokemonList(pokemonList, searchText);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar hidden />

            {/* SearchBar */}
            <TextInput                                        
                value={searchText}
                onChangeText={searchPokemon}
                placeholder='Search Pokemon...'
                style={{ height: 40, borderColor: 'gray', borderWidth: 2, margin: 10, padding: 10, borderRadius: 10 }}
            />

            {/* Type Selection */}
            <View style={{ flexDirection: 'row' }}>         
                <ScrollView horizontal={true}>
                    {Object.keys(colors).map((typeName, index) => {
                        return <TypeCard key={index} type={typeName} color={selectedTypes.includes(typeName) ? colors[typeName] : 'gray'} onSelect={() => { handleSelectType(typeName) }} colorDark={[colorsDark[typeName]]} />;
                    })}
                </ScrollView>
            </View>
            
            {/* PokemonList */}
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
