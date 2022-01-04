import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { login } from '../components/Login'
import { register } from '../components/Register'
import ProfileScreen from './ProfileScreen';


function HomeScreen({ navigation }) {

    return (
        <ImageBackground resizeMode='contain' style={styles.backgroundImage} source={require("../assets/images/background.png")}>
            <View>
                <Text style={styles.welcomeText}>Welcome to NFT Alerts</Text>
                <Text style={styles.welcomeSubText}>Get notifications for NFT price changes</Text>
            </View>
            <View style={styles.loginButton}>
                <Text onPress={() => navigation.navigate("ProfileScreen")} style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text onPress={register} style={styles.registerText}>Connect MetaMask</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#363633',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 120,
        alignItems: 'center'
    },
    loginButton: {
        width: '80%',
        height: 70,
        backgroundColor: '#35A83A',
        marginBottom: 5,
        borderRadius: 100 / 2
    },
    registerButton: {
        width: '80%',
        height: 70,
        backgroundColor: '#FFEC4F',
        borderRadius: 100 / 2
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    registerText: {
        color: '#363633',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    },
    welcomeSubText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 130
    }
})

export default HomeScreen;

