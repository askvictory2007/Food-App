import React, { useState } from 'react';
import { ScrollView, TextInput, Button ,ImageBackground ,View,TouchableOpacity,Text} from 'react-native';
import { signInWithPhoneNumber } from '../domain/phoneAuthentication';

const PhoneAuthentication = () => {
    const [phone, setPhone] = useState('+91');
    const [smsCode, setSmsCode] = useState('');
    const [confirmSMSCode, setConfirmSMSCode] = useState();

    const handleSendSMS = async () => {
        signInWithPhoneNumber(phone).then(confirmation => {
            setConfirmSMSCode(() => confirmation);
        });
    };

    const handleConfirmSMSCode = () => {
        if (!confirmSMSCode || smsCode === '') {
            return;
        }
        confirmSMSCode(smsCode);
    };

    if (!confirmSMSCode)
        return (
            <ImageBackground  source={require('../assets/background3.png')}  style={{flex:1}} >

            <ScrollView style={{ padding: 20, marginTop: 20 }}>
            <View style={{  flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:500
        }}>
                <TextInput style={{width: 300,
        padding: 15,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 8,
        fontSize: 13,
        color: '#002f6c',
        marginVertical: 15}}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Your phone Number"
        placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                />
               
                <TouchableOpacity style={{ width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 13,
        paddingVertical: 17}} onPress={handleSendSMS}> 
                    <Text style={{fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'}} >
                    Next
                    </Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            </ImageBackground>

        );
    else
        return (
            <ImageBackground  source={require('../assets/background3.png')}  style={{flex:1}} >

            <ScrollView style={{ padding: 20, marginTop: 20 }}>
            <View style={{  flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:500
    }}>
                <TextInput style={{width: 300,
        padding: 15,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10}}
                     value={smsCode}
                    onChangeText={setSmsCode}
                    keyboardType="numeric"
                    placeholder="Code from SMS"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                />
                
               
                     <TouchableOpacity style={{ width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 13,
        paddingVertical: 17}} onPress={handleConfirmSMSCode}> 
                    <Text style={{fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'}} >
                    Confirm
                    </Text>
                </TouchableOpacity>
                </View>            

            </ScrollView>
            </ImageBackground>

        );
};

export default PhoneAuthentication;
