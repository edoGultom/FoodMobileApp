import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { signInAction } from '../../redux/action/authAction';
import { useForm } from '../../utils';

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch();

    //grouping form menjadi satu object
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });


    const onSubmit = () => {
        const obj = {
            form,
            navigation: navigation
        }
        dispatch(signInAction(obj))
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In" subtitle="Find your best ever meal" />
            <View style={styles.container}>
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

                <Button
                    text="Sign In"
                    onPress={onSubmit}
                />

                <Gap height={12} />

                <Button
                    text="Create New Account"
                    color='#8D92A3'
                    textColor="white"
                    onPress={() => navigation.navigate('SignUp')}

                />
            </View>
        </View>
    )
}

export default SignIn

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
    }
})