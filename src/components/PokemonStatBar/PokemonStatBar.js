import { View, Text } from "react-native";
import { Bar } from "react-native-progress";
import styles from './PokemonStatBar.style';

const PokemonStatBar = ({name,stat}) => {

    const fixName = (name) => {
        // Metni tirelerden bölerek parçalara ayır
        const words = name.split('-');
        // Her kelimenin ilk harfini büyük yap ve kelimeleri birleştir
        const fixedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
        return fixedName;
      };const fixedName = name.charAt(0).toUpperCase() + name.slice(1)
    
    const getStatColor = (stat) => {
        if (stat < 60) {
            return '#ff7f0f';
        } else if (stat >= 60 && stat < 90) {
            return '#ffdd57';
        } else {
            return '#a0e515';
        }
    };

    return (
        <View style={styles.stat}>
            <Text style={styles.stat_name}>
                {fixName(name)}
            </Text>
            <Text style={styles.stat_value}>
                {stat}
            </Text>
            <Bar
                style={styles.bar}
                progress={stat / 252}
                width={180}
                height={20}
                borderRadius={30}
                color={getStatColor(stat)}
                unfilledColor="#ecf0f1"
                borderWidth={0}
                borderColor={getStatColor(stat)}
            />
        </View>
    )
}

export default PokemonStatBar;