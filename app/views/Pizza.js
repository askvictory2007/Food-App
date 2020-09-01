import React, { Component } from 'react';
import { ImageBackground ,Dimensions,ScrollView} from 'react-native';
import { StyleSheet, Alert, View, Image, TouchableOpacity , AsyncStorage} from 'react-native';
import { Container, Header, Title, Subtitle,Content, Footer, FooterTab, Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export default class Pizza extends Component {
  handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('appcontainer'))
    .catch(error => this.setState({ errorMessage: error.message }));
    };
   
    render() {
        let {height, width} = Dimensions.get('window');
                return (
            <Container>
        <Header style={styles.but}>
            
          <Left>
            <Button transparent>
            <Icon name="menu" onPress={() => Actions.drawerToggle()}/>
            </Button>
          </Left>
          <Body >
            <Title>Restaurant</Title>
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
             <Text style={styles.name}>Product:</Text>
                <Text>Pizza</Text>
                <Text style={styles.name}>Price:</Text>
                <Text>300</Text>
                <Text style={styles.name}>Cuisines:</Text>
                <Text>Chinese</Text>
                <Text style={styles.name}>Timings:</Text>
                <Text>12 Noon to 1 AM</Text>
                <Text style={styles.name}>Restaurant Name:</Text>
                <Text>ThinkBig Restaurant</Text>
                <Text style={styles.name}>Highlights</Text>
                <Text>Cash</Text>
                <Text>Debit Card</Text>
                <Text>Credit Card</Text>
                <Text>Delivery</Text>
                <Text>Air Conditioned</Text>
            </ScrollView>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={() => Actions.orderp()}> 
                    <Text style={styles.buttonText} >
                        Order
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
  backgroundImage: {
      flex: 1,
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center',
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
    }
});
