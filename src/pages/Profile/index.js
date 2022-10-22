import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileDummy } from '../../assets'
import { ProfileTabSection } from '../../components'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../../utils'

const Profile = () => {
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        getData('userProfile').then((res) => {
            setUserProfile(res);
        })
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.profileDetail}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <Image source={{ uri: userProfile.profile_photo_url }} style={styles.photoContainer} />
                    </View>
                </View>
                <Text style={styles.name}>{userProfile.name}</Text>
                <Text style={styles.email}>{userProfile.email}</Text>
            </View>

            <View style={styles.tabSaction}>
                <ProfileTabSection />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileDetail: {
        backgroundColor: 'white',
        paddingBottom: 26
    },
    name: {
        fontFamily: "Poippins-Medium",
        fontSize: 18,
        color: '#020202',
        textAlign: 'center'
    },
    email: {
        fontFamily: "Poippins-Regular",
        fontSize: 14,
        color: '#8D92A3',
        textAlign: 'center'
    },
    page: {
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
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
        padding: 24,
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
    tabSaction: {
        flex: 1,
        marginTop: 24
    }
})