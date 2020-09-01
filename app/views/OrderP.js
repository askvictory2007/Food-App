import React, { Component } from 'react';
import { ImageBackground ,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import { StyleSheet, Alert, View, Image , AsyncStorage} from 'react-native';
import { Container, Header, Title, Subtitle,Content, Form, Item,Input,Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
//import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import firebase from './Firebase.js';

export default class OrderB extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Pizza');
    this.state = {
      name: '',
      address:'',
      contact:'',
      card:'',
      expires:'',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.name === ''&& this.state.address === '' && this.state.contact === ''&& this.state.card === '' && this.state.expires === ''){
     alert('Enter The Details!')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        address: this.state.address,
        contact: this.state.contact,
        card: this.state.card,
        expires: this.state.expires,
      }).then((res) => {
        this.setState({
          name: '',
          address:'',
          contact:'',
          card:'',
          expires:'',
          isLoading: false,
        });
        this.props.navigation.navigate('track2')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

      handleLogout = () => {
       firebase
      .auth()
      .signOut()
       .then(() => this.props.navigation.navigate('appcontainer'))
      .catch(error => this.setState({ errorMessage: error.message }));
    };
    
    render() {
      
                return (
            <Container>
        <Header style={styles.but}>
            
          <Left>
            <Button transparent>
            <Icon name="menu" onPress={() => Actions.drawerToggle()}/>
            </Button>
          </Left>
          <Body >
            <Title>CheckOut</Title>
            <Subtitle>Pizza</Subtitle>
          </Body>
          <Right >
            <Button transparent onPress={this.handleLogout} >
            <Icon name='log-out' />
                        </Button>
          </Right>
         
        </Header>
        <Content>
           
        <View style={styles.container}>
            <ScrollView>
            <Image source={{uri:     'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
}} style={{height: 260, width: null, flex: 1}}/>   
             <Title style={styles.title}>ThinkBig Restaurant</Title>
             <Text style={styles.name}>Enter The Details</Text>

             <Item rounded style={styles.detail}>
            <Input placeholder='Name'
               value={this.state.name}
               onChangeText={(val) => this.inputValueUpdate(val, 'name')}       
             />
          </Item>
          <Item rounded style={styles.detail}>
            <Input placeholder='Address'
                           value={this.state.address}

                           onChangeText={(val) => this.inputValueUpdate(val, 'address')}       

            />
          </Item>
          <Item rounded style={styles.detail}>
            <Input placeholder='Phone Number'
                           value={this.state.contact}

                           onChangeText={(val) => this.inputValueUpdate(val, 'contact')}       

            />
          </Item>
          <Item rounded style={styles.detail}>
            <Input placeholder='Credit/Debit card'
                           value={this.state.card}

                           onChangeText={(val) => this.inputValueUpdate(val, 'card')}       

            />
          </Item>
          <Item rounded style={styles.detail}>
            <Input placeholder='expired on'
                           value={this.state.expires}

                           onChangeText={(val) => this.inputValueUpdate(val, 'expires')}       

            />
          </Item>
                         </ScrollView>
        </View>
        <TouchableOpacity style={styles.button}               onPress={() => this.storeUser()}  >
                    <Text style={styles.buttonText} >
                        Proceed to Payment
                    </Text>
                </TouchableOpacity>
          
        </Content>

           
      </Container>
        );
    }
}

const styles = StyleSheet.create({
  but: {
    height: 70

},

container:{
  marginHorizontal:15
},
name:{
  fontWeight:'bold',
  marginTop:5
},
title:{
  fontWeight:'bold',
  fontSize:22,
  color:'blue'
},
button: {
  width: 390,
  backgroundColor: '#4f83cc',
  borderRadius: 25,
  padding: 22,
  marginTop: 40,
  marginLeft: 35,
  marginBottom:20,
  paddingHorizontal:20,
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  },
  name:{
    textAlign: 'center',
    fontWeight:'bold',
    marginTop:5,
    marginBottom:5
  },
  detail:{
      marginBottom:25,
      fontStyle:"italic"
  }
});
