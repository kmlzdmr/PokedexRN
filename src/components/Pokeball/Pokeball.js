import { View, ImageBackground,StyleSheet } from "react-native";

const Pokeball = () => {

    const pokeballBackground = require('../../../assets/pokeball-white.png');

    <View>
        <ImageBackground
            source={pokeballBackground}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
        >
        </ImageBackground>
    </View>

   
}

export default Pokeball;


const styles = StyleSheet.create({
    backgroundImage: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
      imageStyle: {
        opacity: 0.5, // Pokeball'ı arkaplan olarak eklediğinizde opacity ayarı yapabilirsiniz
      },
})