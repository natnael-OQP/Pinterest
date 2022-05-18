import { useState } from 'react'
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

const CreatePinScreen = () => {
    const [image, setImage] = useState('')
    const [pinTitle, setPinTitle] = useState('')

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const submit = () => {
        console.log(pinTitle, image)
    }

    return (
        <View style={styles.container}>
            {!image && (
                <>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={{ margin: 10 }}
                    >
                        <AntDesign name="addfile" size={50} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            margin: 10,
                            fontStyle: 'italic',
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#181818',
                        }}
                    >
                        Select Image
                    </Text>
                </>
            )}
            {image && (
                <View
                    style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: 4 / 3,
                    }}
                >
                    <Image
                        source={{ uri: image || '' }}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => setImage('')}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                    >
                        <AntDesign name="closecircle" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}
            {image && (
                <>
                    <TextInput
                        style={{
                            width: '100%',
                            padding: 7,
                            marginVertical: 5,
                            fontSize: 17,
                            fontWeight: '500',
                        }}
                        placeholder="New Pin"
                        value={pinTitle}
                        onChangeText={setPinTitle}
                    />
                    <TouchableOpacity onPress={submit}>
                        <Text style={styles.btn}>Submit</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}

export default CreatePinScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    btn: {
        marginVertical: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
