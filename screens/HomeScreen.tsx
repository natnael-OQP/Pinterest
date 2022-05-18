import { FlatList, StyleSheet, useWindowDimensions } from 'react-native'
import PinComponent from '../components/PinComponent'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import Pins from '../assets/data/pins'
import MasonryList from '@react-native-seoul/masonry-list'
import { useEffect, useState } from 'react'

interface Props {
    item: {
        id: string
        image: string
        title: string
    }
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    const { width } = useWindowDimensions()
    const [numberOfColumns, setNumberOfColumns] = useState<number>()

    useEffect(() => setNumberOfColumns(Math.ceil(width / 250)), [width])

    return (
        <View style={styles.container}>
            <MasonryList
                style={{ width: '100%' }}
                data={Pins}
                numColumns={numberOfColumns}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PinComponent {...item} />}
                showsVerticalScrollIndicator={false}
            />
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
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
