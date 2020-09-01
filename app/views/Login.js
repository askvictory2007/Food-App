import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity, Dimensions,Image} from 'react-native'
import * as firebase from 'firebase';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon ,Button    } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component{
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('appcontainer'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render()
  {
    let {height, width} = Dimensions.get('window');

    return (
      <Container>
      <Header style={styles.butt}>
        <Left>
          <Button transparent>
          </Button>
        </Left>
        <Body >
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.butt}>
    
      <View style={styles.container}>
     
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
         
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.inputStyle}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputStyle}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}> 
                    <Text style={styles.buttonText} >
                        Login
                    </Text>
                </TouchableOpacity>
        
      </View>
      </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
butt: {
  height: 80,
  marginBottom:150
},
  inputStyle: {
    width: '90%',
    marginBottom: 11,
    paddingBottom: 33,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 4,
    
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  button: {
    width: 350,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    padding: 18,
    marginTop: 40,
    marginBottom:20,
    paddingHorizontal:10,
},
buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
}
});

