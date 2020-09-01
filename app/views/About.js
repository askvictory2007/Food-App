import React, { Component } from 'react';
import { ImageBackground , ScrollView,Dimensions} from 'react-native';
import { StyleSheet, Alert, View, Image, TouchableOpacity , AsyncStorage} from 'react-native';
import { Container, Header,Title, Content, Footer, Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export default class About extends Component {
    state = { currentUser: null }

    componentDidMount() {
      const { currentUser } = firebase.auth()
  
      this.setState({ currentUser })
    }
  handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('appcontainer'))
    .catch(error => this.setState({ errorMessage: error.message }));
    };
   
    render() {
        let {height, width} = Dimensions.get('window');
        const { currentUser } = this.state
                return (
            <Container>
        <Header style={styles.but}>
            
          <Left>
            <Button transparent>
            <Icon name="menu" onPress={() => Actions.drawerToggle()}/>
            </Button>
          </Left>
          <Body >
            <Title>About</Title>
          </Body>
          <Right >
            
                        <Button transparent onPress= {()=>Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
          </Right>
         
        </Header>
        <Content>
        <View style={styles.container}>
          <ScrollView>
           <Text style={styles.title}> Welcome {currentUser && currentUser.email}</Text>
           <Image source={{uri:     'https://hackernoon.com/drafts/ro2832a9.png'
}} style={{height: 260, width: 370, flex: 1}}/> 
          <Text style={styles.conn}>React Native</Text>
          <Text style={styles.con}>React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities</Text>
          <Text style={styles.test}>It Is Testing App</Text>
          <TouchableOpacity style={styles.button} onPress={this.handleLogout}> 
                    <Text style={styles.buttonText} >
                        SignOut
                    </Text>
                </TouchableOpacity>
                </ScrollView>
                </View>
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
title:{
  fontWeight:'bold',
  fontSize:20,
  color: '#4C699E',

},
conn:{
  fontWeight:'bold',
  fontSize:22,
color:'#4C699E'
},
test:{
  fontWeight:'bold',
  fontSize:22,
color:'#4C699E',
textAlign:'center',
marginTop:33
},
con:{
  fontWeight:'bold',
  fontSize:18,
},
button: {
  width: 360,
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
