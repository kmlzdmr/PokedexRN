import { StyleSheet } from "react-native";

export default StyleSheet.create({
    stat: {
        flexDirection: 'row',
        marginBottom: 22,
        justifyContent:'space-around'
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
})

