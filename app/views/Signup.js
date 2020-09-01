import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon ,Button    } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Signup extends Component {
  state = { email: '', password: '',errorMessage: null }

  handleSignUp = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <Container>
      <Header style={styles.butt}>
        <Left>
          <Button transparent>
          </Button>
        </Left>
        <Body >
          <Title>Register</Title>
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
          placeholder="Name"
          autoCapitalize="none"
          style={styles.inputStyle}         
        />
        
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
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}> 
                    <Text style={styles.buttonText} >
                        Register
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
    marginTop: 40,
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

