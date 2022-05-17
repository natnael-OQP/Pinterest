import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    image: string
    title: string
}

const PinScreen = ({ navigation, route: { params } }: any) => {
    const [ratio, setRatio] = useState()
    const { image, title } = params
    const inset = useSafeAreaInsets()

    useEffect(() => {
        Image.getSize(image, (width: number, height: number) =>
            setRatio(width / height)
        )
    }, [])

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#000', height: '100%' }}>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Pressable
                    onPress={goBack}
                    style={[styles.icons, { top: inset.top + 20 }]}
                >
                    <Ionicons name="chevron-back" size={35} color="white" />
                </Pressable>
                <Image
                    style={[styles.image, { aspectRatio: ratio }]}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={styles.title}> {title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default PinScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
    },
    icons: {
        position: 'absolute',
        left: 10,
        zIndex: 999,
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#181818',
    },
    image: {
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
        textAlign: 'center',
        height: '100%',
    },
})
