import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PinComponent = () => {
    return (
        <View style={styles.pin}>
            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
                }}
                style={styles.image}
            />
            <Text style={styles.title}>notJust Dev Hoodie</Text>
        </View>
    )
}

export default PinComponent

const styles = StyleSheet.create({
    pin: {
        width: '100%',
    },
    image: {
        borderRadius: 25,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
})
