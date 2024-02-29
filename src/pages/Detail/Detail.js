import React from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import styles from './Detail.style';
import useSingleFetch from "../../hooks/useSingleFetch/useSingleFetch";
import { Bar } from 'react-native-progress';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import useSpeciesFetch from "../../hooks/useSpeciesFetch";

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

const Detail = ({ route }) => {
    const { id } = route.params;
    const { pokemon, loading: pokemonLoading, error: pokemonError } = useSingleFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const { species, loading: speciesLoading, error: speciesError } = useSpeciesFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

    // pokemon null veya undefined ise
    if (pokemonLoading || speciesLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }
    console.log(species.egg_groups)

    const stats = pokemon.stats;
    const typeColor = pokemon.types[0] && colors[pokemon.types[0].type.name] ? colors[pokemon.types[0].type.name] : 'gray';
    const typeColor1 = pokemon.types[1] && colors[pokemon.types[1].type.name] ? colors[pokemon.types[1].type.name] : 'gray';
    const darkTypeColor = pokemon.types[0] && colorsDark[pokemon.types[0].type.name] ? colorsDark[pokemon.types[0].type.name] : 'gray';


    const getStatColor = (stat) => {
        if (stat < 60) {
            return '#ff7f0f';
        } else if (stat >= 60 && stat < 90) {
            return '#ffdd57';
        } else {
            return '#a0e515';
        }
    };

    function getTotalStat(stats) {
        let sum = 0;
        for (let i = 0; i <= 5; i++) {
            sum += stats[i].base_stat;
        }
        return (sum)
    }

    const formatHeight = (height) => {

        const meters = height / 10; // cm cinsinden  metre cinsine dönüştürme
        const feet = Math.floor(meters * 3.28084); // Metreyi ayak ve inç dönüştürme
        const inches = Math.round((meters * 3.28084 - feet) * 12);

        return `${meters.toFixed(1)} m (${feet}'${inches}")`;
    };


    const formatWeight = (weight) => {

        const kilograms = weight / 10; // gram cinsinden olan ağırlığı kilograma dönüştürme
        const pounds = Math.round(kilograms * 2.20462); // Kiloyu libre ve ons'a dönüştürme

        return `${kilograms.toFixed(1)} kg (${pounds.toFixed(1)} lbs)`;
    };

    const formatString = (text) => {
        const formattedText = text.charAt(0).toUpperCase() + text.slice(1)
        return formattedText
    }

    return (
        <View style={[styles.container, { backgroundColor: darkTypeColor }]}>
            <View style={[styles.header_container, { backgroundColor: darkTypeColor }]}>
                <Text style={styles.title}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                <Text style={styles.id}>#{String(id).padStart(3, '0')}</Text>
                <View style={styles.types}>
                    {pokemon.types[1] ? (
                        <>
                            <View style={[styles.type, { backgroundColor: typeColor }]}>
                                <Text style={styles.type_name}>{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</Text>
                            </View>
                            <View style={[styles.type, { backgroundColor: typeColor1 }]}>
                                <Text style={styles.type_name}>{pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}</Text>
                            </View>
                        </>
                    ) : (
                        <View style={[styles.type_single, { backgroundColor: typeColor }]}>
                            <Text style={styles.type_name}>{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</Text>
                        </View>
                    )}
                </View>
                <Image style={styles.image} source={{ uri: pokemon.sprites.other.home.front_default }} />
            </View>
            <View style={{ height: 100 }}>

            </View>

            <View style={{ flex: 1, marginTop: -80 }}>
                <ScrollView style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                    <View style={styles.instructions_container}>
                        <View style={styles.stat_title_container}>
                            <Text style={styles.stats_title}>Stats</Text>
                            <FontAwesome name="chart-bar" size={22} style={{ bottom: 6 }} />
                        </View>

                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[0].stat.name.charAt(0).toUpperCase() + stats[0].stat.name.slice(1)}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[0].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[0].base_stat / 252}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[0].base_stat)}
                                unfilledColor="#ecf0f1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[0].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[1].stat.name.charAt(0).toUpperCase() + stats[1].stat.name.slice(1)}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[1].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[1].base_stat / 252}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[1].base_stat)}
                                unfilledColor="#ecf0f1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[1].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[2].stat.name.charAt(0).toUpperCase() + stats[2].stat.name.slice(1)}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[2].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[2].base_stat / 252}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[2].base_stat)}
                                unfilledColor="#ecf0f1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[2].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[3].stat.name.replace(/\b\w/g, c => c.toUpperCase())}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[3].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[3].base_stat / 252}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[3].base_stat)}
                                unfilledColor="#ecf0f1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[3].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[4].stat.name.replace(/\b\w/g, c => c.toUpperCase())}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[4].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[4].base_stat / 252}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[4].base_stat)}
                                unfilledColor="#ecf0f1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[4].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                {stats[5].stat.name.charAt(0).toUpperCase() + stats[5].stat.name.slice(1)}
                            </Text>
                            <Text style={styles.stat_value}>
                                {stats[5].base_stat}
                            </Text>
                            <Bar
                                style={styles.bar}
                                progress={stats[5].base_stat / 250}
                                width={180}
                                height={20}
                                borderRadius={30}
                                color={getStatColor(stats[5].base_stat)}
                                unfilledColor="#eceff1"
                                borderWidth={0}
                                borderColor={getStatColor(stats[5].base_stat)}
                            />
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.stat_name}>
                                Total
                            </Text>
                            <Text style={styles.stat_value}>
                                {getTotalStat(stats)}
                            </Text>
                        </View>
                    </View>

                    {/* ABOUT SECTION */}

                    <Text style={styles.about_title}> About </Text>
                    <View style={styles.about_container}>
                        <View style={styles.weight}>
                            <Text style={styles.about_topic}>Weight: </Text>
                            <Text style={styles.about_text}>{formatWeight(pokemon.weight)}</Text>
                        </View>
                        <View style={styles.height}>
                            <Text style={styles.about_topic}>Height: </Text>
                            <Text style={styles.about_text}>{formatHeight(pokemon.height)}</Text>
                        </View>
                        <View style={styles.abilities}>
                            <Text style={styles.about_topic}>Abilities: </Text>
                            {pokemon.abilities[1] != null
                                ? <Text style={styles.about_text}>{formatString(pokemon.abilities[0].ability.name)}, {formatString(pokemon.abilities[1].ability.name)}</Text>
                                : <Text style={styles.about_text}>{formatString(pokemon.abilities[0].ability.name)}</Text>
                            }
                        </View>

                        <View style={styles.abilities}>
                            <Text style={styles.about_topic}>Egg Groups: </Text>
                            {species.egg_groups[1] != null
                                ? <Text style={styles.about_text}>{formatString(species.egg_groups[0].name)}, {formatString(species.egg_groups[1].name)}</Text>
                                : <Text style={styles.about_text}>{formatString(species.egg_groups[0].name)}</Text>
                            }
                        </View>
                        
                        <View style={styles.abilities}>
                            <Text style={styles.about_topic}>Base Happiness: </Text>
                            <Text style={styles.about_text}>{species.base_happiness}</Text>
                        </View>
                        <View style={styles.abilities}>
                            <Text style={styles.about_topic}>Capture Rate: </Text>
                            <Text style={styles.about_text}>%{species.capture_rate}</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View >
    )
}

export default Detail;
