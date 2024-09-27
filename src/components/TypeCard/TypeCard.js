import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from './TypeCard.style'
const TypeCard = ({ type, color, colorDark, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={[styles.container, { backgroundColor: color }]}>
                <Text style={styles.text}> {type.charAt(0).toUpperCase() + type.slice(1)} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TypeCard;