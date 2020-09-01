import React, { Component } from 'react';
import { ImageBackground ,Dimensions} from 'react-native';
import { StyleSheet, Alert, View, Image,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';



export default class Track2 extends Component {

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
            <Title>Track</Title>
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
            <Image source={{uri:     'https://www.thespruceeats.com/thmb/LjRrH9oFj7xSqL6yyVvS2qb9FFw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg'
}} style={{height: 260, width: null, flex: 1}}/>   
             
                         </ScrollView>
        </View>
        <ScrollView>
        <View style={styles.container2}>
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
                <Text style={styles.name}>About:</Text>
                <Text>It Is Testing App</Text>
        <TouchableOpacity style={styles.button}     onPress= {() => {Actions.trackmap(); }}  >
                    <Text style={styles.buttonText} >
                        Track My Order
                    </Text>
                </TouchableOpacity>
       </View>
       </ScrollView>
        </Content>
    
           
      </Container>
        );
    }
}

const styles = StyleSheet.create({
  but: {
    height: 70

},
container: {
  height: 240, width: null, flex: 1
  
},
container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
},
map: {
  ...StyleSheet.absoluteFillObject,
},
title:{
  fontWeight:'bold',
  fontSize:22,
  color:'blue'
},
name:{
    fontWeight:'bold',
    marginTop:5
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
