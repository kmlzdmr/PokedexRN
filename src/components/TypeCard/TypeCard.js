import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from './TypeCard.style'
const TypeCard = ({ type, color, colorDark, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={[styles.container, { backgroundColor: color }]}>
                <Text style={styles.text}> {type.charAt(0).toUpperCase() + type.slice(1)} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TypeCard;