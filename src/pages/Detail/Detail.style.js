import { Dimensions, StyleSheet } from "react-native";

const Device = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        zIndex:1
    },
    header_container: {
        width: '100%',
        height: Device.height / 3,
        backgroundColor: 'green',
    },
    types: {
        width: Device.width,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    type: {
        marginHorizontal: 10,
        borderWidth: 1,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: 100,
        position:'relative',
        top:-25,
        left:-55,
        borderRadius:20,
        borderColor:'white',
        borderWidth:0,
        zIndex:2
    },
    type_single:{
        marginHorizontal: 10,
        borderWidth: 1,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: 100,
        position:'relative',
        top:-10,
        right:110,
        borderRadius:20,
        borderColor:'white',
        borderWidth:0,
        zIndex:2
    },
    type_name: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        position: 'absolute',
        bottom: -30, 
        alignSelf: 'center',
        zIndex:1,
    },
    title: {
        fontSize: 40,
        color: 'white',
        left:20,
        fontWeight:'700'
    },
    id: {
        right: -330,
        top: -35,
        fontSize: 20,
        color: 'white',
        fontWeight:'500'
    },
    stats_container: {
        marginTop:30,
        flex: 1,
        margin: 10,
    },
    stat: {
        flexDirection: 'row',
        marginBottom: 22,
        justifyContent:'space-around'
    },
    stat_title_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    stats_title:{
        alignSelf:'center',
        fontSize:24,
        marginBottom:15,
        fontWeight:'bold',
        marginRight:10,
    },
    stat_name: {
        position:'absolute',
        marginRight: 20,
        fontSize: 16,
        left:0,
        alignSelf:'flex-start',
        fontWeight:'600',
    },
    stat_value: {
        position:'absolute',
        left:140,
        fontWeight:'600'
    },
    bar:{
        position:'relative',
        marginLeft:150
    },
    about_title:{
        alignSelf:'center',
        fontSize:22,
        fontWeight:'bold',
        margin:5,
    },
    about_container:{
        flex:1
    },
    height:{
        flexDirection:'row',
        margin:10,
        alignItems:'center'
    },
    weight:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
    },
    abilities:{
        flexDirection:'row',
        margin:10,
        alignItems:'center'
    },
    about_topic:{
        fontWeight:'600',
        fontSize:16,
    },
    about_text:{
        left:140,
        position:'absolute',
    },
    breeding_title:{
        alignSelf:'center',
        fontSize:22,
        fontWeight:'bold',
        margin:5
    },
    backgroundImage: {
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        position:'absolute',
        top:5,
        left:60
      },
      imageStyle: {
        opacity: 0.20, // Pokeball'ı arkaplan olarak eklediğinizde opacity ayarı yapabilirsiniz
      },
})