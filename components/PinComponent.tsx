import React, { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

interface Props {
    id: string
    image: string
    title: string
}

const PinComponent = ({ image, title }: Props) => {
    const [ratio, setRatio] = useState(3)
    const onLike = () => {}

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height))
        }
    }, [image])

    return (
        <View style={styles.pin}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={[styles.image, { aspectRatio: ratio }]}
                />
                <Pressable onClick={onLike} style={styles.icon}>
                    <AntDesign name="hearto" size="large" color="black" />
                </Pressable>
            </View>
            <Text numberOfLines={2} style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default PinComponent

const styles = StyleSheet.create({
    pin: {
        width: '100%',
        padding: 5,
    },
    imageContainer: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#e5e5e5',
    },
    image: {
        borderRadius: 25,
        width: '100%',
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        margin: 10,
        color: '#181818',
    },
})
