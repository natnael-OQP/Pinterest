import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PinScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg',
                    }}
                />
            </View>
            <Text>PinScreen</Text>
        </View>
    )
}

export default PinScreen

const styles = StyleSheet.create({
    container: {},
    imageContainer: {},
    image: {},
})
