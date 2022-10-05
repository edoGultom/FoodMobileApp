import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { showMessage, useForm } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addRegister, addPhoto } from '../../redux/action';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [photo, setPhoto] = useState('');

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(addRegister(form))
        navigation.navigate('SignUpAddress')
    }

    const choosePhoto = () => {
        //biasa ny pakai launchImageLibrary(options, (response)) 'option' dan response(callback) 
        // karena biasanya optionnya ada isi sesuai setup, jadi dibuat dsni defaultny kosong
        launchImageLibrary({
            quality: 0.5,
            maxHeight: 200,
            maxWidth: 200,
        }, (response) => {
            if (response.didCancel || response.errorCode) {
                showMessage('Anda tidak memilih photo',)
            } else {
                if (response.assets && response.assets?.length !== 0) {
                    const source = { uri: response.assets[0].uri };
                    const datImage = {
                        uri: response.assets[0].uri,
                        type: response.assets[0].type,
                        name: response.assets[0].fileName,
                        isUploadPhoto: true
                    }
                    setPhoto(source)
                    dispatch(addPhoto(datImage))
                }
            }
        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.page}>
                <Header
                    title="Sign Up"
                    subtitle="Register and eat"
                    onBack={() => navigation.goBack()}
                />
                {/* <Text>{`status ${globalState.isError}`}</Text> */}
                <View style={styles.container}>
                    <View style={styles.photo}>

                        <View style={styles.borderPhoto}>
                            <Pressable
                                android_ripple={{
                                    color: 'rgb(224, 224, 224)',
                                    borderless: true,
                                    foreground: true,
                                }}
                                onPress={choosePhoto}
                                style={{
                                    height: 75,
                                    width: 75,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    elevation: 4,
                                }}
                            >
                                {
                                    photo ? (
                                        <Image source={photo} style={styles.photoContainer} />)
                                        : (
                                            <View style={styles.photoContainer}>
                                                <Text style={styles.addPhoto}>Add Photo</Text>
                                            </View>
                                        )
                                }
                            </Pressable>
                        </View>
                    </View>

                    <TextInput
                        lable="Full Name"
                        placeholder="Type your full name"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        lable="Email Address"
                        placeholder="Type your email address"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        lable="Password"
                        placeholder="Type your password"
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry
                    />
                    <Gap height={24} />
                    <Button text="Continue" onPress={onSubmit} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingTop: 26,
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center',
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    }
})