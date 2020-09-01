import React, { Component } from 'react';
import { ImageBackground ,Dimensions} from 'react-native';
import { StyleSheet, Alert, View, Image, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
import * as firebase from 'firebase';
import { Card,CardItem, Thumbnail} from 'native-base';


export default class Home extends Component {
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
            <Title>Home</Title>
          </Body>
          <Right >
            <Button transparent onPress={this.handleLogout} >
            <Icon name='log-out' />
                        </Button>
          </Right>
         
        </Header>
        <Content>
           
        
            <Card>

              <CardItem cardBody>
              <Image source={{uri:     'https://www.thespruceeats.com/thmb/LjRrH9oFj7xSqL6yyVvS2qb9FFw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg'
}} style={{height: 240, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Left>
                <Body>
                  <Text>Biriyani</Text>
                </Body>
              </Left>
              <Right>
              <Button rounded  onPress= {() => {Actions.biriyani(); }}>
            <Text>Order</Text>
          </Button>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem cardBody>
              <Image source={{uri:     'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
}} style={{height: 240, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Left>
                <Body>
                  <Text>Pizza</Text>
                </Body>
              </Left>
              <Right>
              <Button rounded onPress= {() => {Actions.pizza(); }}>
            <Text>Order</Text>
          </Button>
              </Right>
            </CardItem>
          </Card>  



          <Card>
            <CardItem cardBody>
              <Image source={{uri:     'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
}} style={{height: 240, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Left>
                <Body>
                  <Text>Mexican Food</Text>
                </Body>
              </Left>
              <Right>
              <Button rounded onPress= {() => {Actions.mexican(); }}>
            <Text>Order</Text>
          </Button>
              </Right>
            </CardItem>
          </Card>

        </Content>

           
      </Container>
        );
    }
}

const styles = StyleSheet.create({
  but: {
    height: 70

},

    backgroundImage: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
       }
});
