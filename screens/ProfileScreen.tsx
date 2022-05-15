import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>notJust Dev Hoodie</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
})
