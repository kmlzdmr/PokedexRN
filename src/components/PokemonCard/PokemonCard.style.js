import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
      fontWeight: '900',
      fontSize: 15,
      marginBottom: 5,
      color:'white',
    },
    type: {
      fontSize: 14,
    },
    backgroundImage: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      position:'absolute',
      top:0,
      left:5
    },
    imageStyle: {
      opacity: 0.25, // Pokeball'ı arkaplan olarak eklediğinizde opacity ayarı yapabilirsiniz
    },
  });
  