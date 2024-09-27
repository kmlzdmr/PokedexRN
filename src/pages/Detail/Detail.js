import React from "react";
import { View, Text, Image, ActivityIndicator, ScrollView, ImageBackground } from "react-native";
import styles from './Detail.style';
import useSingleFetch from "../../hooks/useSingleFetch/useSingleFetch";
//import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import useSpeciesFetch from "../../hooks/useSpeciesFetch";
import PokemonStatBar from "../../components/PokemonStatBar";
import { colors, colorsDark } from "../../colors";
import Loading from "../../components/Loading";
import TabNavigation from '../../components/TabNavigation/TabNavigation'

const Detail = ({ route }) => {

    const { id } = route.params;
    const { pokemon, loading: pokemonLoading, error: pokemonError } = useSingleFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const { species, loading: speciesLoading, error: speciesError } = useSpeciesFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

    // pokemon||species null or undefined
    if (pokemonLoading || speciesLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loading/>
            </View>
        );
    }
    console.log(species.egg_groups)

    const pokeballBackground = require('../../../assets/pokeball-white.png');
    const stats = pokemon.stats;
    const typeColor = pokemon.types[0] && colors[pokemon.types[0].type.name] ? colors[pokemon.types[0].type.name] : 'gray';
    const typeColor1 = pokemon.types[1] && colors[pokemon.types[1].type.name] ? colors[pokemon.types[1].type.name] : 'gray';
    const darkTypeColor = pokemon.types[0] && colorsDark[pokemon.types[0].type.name] ? colorsDark[pokemon.types[0].type.name] : 'gray';

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
                <ImageBackground source={pokeballBackground}
                    style={styles.backgroundImage}
                    imageStyle={styles.imageStyle}>
                </ImageBackground>
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

            <View style={{ flex: 1, marginTop: -80 , zIndex:-1}}>
                <ScrollView style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                    
                    
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{backgroundColor:'white',marginTop:10,flex:1,opacity:0.5,height:50,borderTopLeftRadius:30,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Base Stats</Text>
                        </View>
                        <View style={{backgroundColor:'white',marginTop:10,flex:1,opacity:0.9,height:50,borderTopLeftRadius:30,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold',}}>About</Text>
                        </View>
                        <View style={{backgroundColor:'white',marginTop:10,flex:1,opacity:0.5,height:50,borderTopLeftRadius:30,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Evolution</Text>
                        </View>
                        <View style={{backgroundColor:'white',marginTop:10,flex:1,opacity:0.5,height:50,borderTopRightRadius:30,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Weakness</Text>
                        </View>
                    </View>
                    <TabNavigation/>
                    
                    <View style={styles.stats_container}>

                        <View style={styles.stat_title_container}>
                            <Text style={styles.stats_title}>Stats</Text>
                            {/* <FontAwesome name="chart-bar" size={22} style={{ bottom: 6 }} /> */}
                        </View>

                        <PokemonStatBar name={stats[0].stat.name} stat={stats[0].base_stat} />

                        <PokemonStatBar name={stats[1].stat.name} stat={stats[1].base_stat} />

                        <PokemonStatBar name={stats[2].stat.name} stat={stats[2].base_stat} />

                        <PokemonStatBar name={stats[3].stat.name} stat={stats[3].base_stat} />

                        <PokemonStatBar name={stats[4].stat.name} stat={stats[4].base_stat} />

                        <PokemonStatBar name={stats[5].stat.name} stat={stats[5].base_stat} />

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
