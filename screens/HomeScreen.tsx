import { FlatList, StyleSheet } from 'react-native'
import PinComponent from '../components/PinComponent'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import Pins from '../assets/data/pins'
import MasonryList from '@react-native-seoul/masonry-list'

interface Props {
    item: {
        id: string
        image: string
        title: string
    }
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <MasonryList
                style={{ width: '100%' }}
                data={Pins}
                numColumns={2}
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
