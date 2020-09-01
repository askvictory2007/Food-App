// @flow
//External libraries
import React, { useState } from 'react';
import { StyleSheet, View,Image,TouchableOpacity,ImageBackground, props} from 'react-native';
import { AppLoading } from 'expo';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

//Components
import Button from './components/UI/Buttons/Button';
import PhoneAuthentication from './screens/PhoneAuthentication';
import { logout } from './domain/logout';
import { Actions } from 'react-native-router-flux';
import Login from '../Login';
import { Container, Header, Title, Content, Footer, FooterTab, Text, Left, Right, Body, Icon} from 'native-base';



type Props = {
    skipLoadingScreen: boolean
};

const AppContainer = (props: Props) => {
    const [userAuthenticated, setUserAuthenticated] = useState();
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [isAuthenticatingWithPhone, setIsAuthenticatingWithPhone] = useState(
        false
    );

    firebase.auth().onAuthStateChanged(user => {
        setUserAuthenticated(user);
    }); 

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        if (isAuthenticatingWithPhone && !userAuthenticated) {
            return <PhoneAuthentication />;
        }
       
        return (
            
            <View style={styles.containe}>
                {userAuthenticated ? (
                    <>
                   
                      <View style={styles.backgroundContainer}>
                          
                    <Image style={styles.bakcgroundImage} source={require('./assets/background3.png')} />
                </View>
                        
                        <Button
                            style={{ marginBottom: 66 }}
                            color="#4f83cc"
                            title="Start"
                            onPress= {() => {Actions.home(); }}
                        />
                         
                    </>
                ) : (
                    <>
                 
                  <View style={styles.backgroundContainer}>
                    <Image style={styles.bakcgroundImage} source={require('./assets/background3.png')} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setIsAuthenticatingWithPhone(true)}> 
                    <Text style={styles.buttonText} >
                        Otp Access
                    </Text>
                </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress= {() => {Actions.login(); }}> 
                    <Text style={styles.buttonText} >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress= {() => {Actions.signup(); }}> 
                    <Text style={styles.buttonText} >
                        Register
                    </Text>
                </TouchableOpacity>

                    </>
                )}
            </View>
           
        );
    }
};

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png')
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
        })
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:250

    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null
    },
    button: {
        width: 350,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        padding: 18,
        marginBottom:23,
        paddingHorizontal:10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default AppContainer;
