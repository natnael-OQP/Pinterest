import {
    StyleSheet,
    Image,
    ScrollView,
    useWindowDimensions,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '../components/Themed'
import MasonryList from '@react-native-seoul/masonry-list'
import PinComponent from '../components/PinComponent'
import pins from '../assets/data/pins'
import { useEffect, useState } from 'react'

export default function ProfileScreen() {
    const { width } = useWindowDimensions()
    const [numberOfColumns, setNumberOfColumns] = useState<number>()

    useEffect(() => setNumberOfColumns(Math.ceil(width / 250)), [width])
    console.log(numberOfColumns)

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/7.jpeg',
                    }}
                />
                <Text style={styles.title}>Natnael Abebe </Text>
                <Text style={styles.subTitle}>
                    213 Follower | 341 Followings{' '}
                </Text>
                <MasonryList
                    style={{ width: '100%' }}
                    data={pins}
                    numColumns={numberOfColumns}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <PinComponent {...item} />}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
    },
    subTitle: {
        color: '#181818',
        fontWeight: 'bold',
        margin: 10,
    },
})
