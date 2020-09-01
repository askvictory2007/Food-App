import React, { Component } from 'react';
import { ImageBackground ,Dimensions} from 'react-native';
import { StyleSheet, Alert, View, Image,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Text,Button, Left, Right, Body, Icon,Tab, Tabs, TabHeading} from 'native-base';
import * as firebase from 'firebase';
//import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';
import { Card,CardItem, Thumbnail} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


let { width, height } = Dimensions.get('window');const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//const GOOGLE_MAPS_APIKEY = 'AIzaSyB_MrS5r7umenpdxh3POsEP8joCoRCX8TA';
export default class Track extends Component {
  constructor() {
    super();    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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
            <Title>Track</Title>
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

  <View style={styles.container}>
  <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.map }
        showsUserLocation={ true }
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        initialregion={ this.state.region }
        onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }
        >

          
        
        <Marker coordinate={{
           latitude: 13.119430,
           longitude:  80.093915,
        }}>
           <Image source={require('../assets/shop.jpg')} style={{height: 35, width:35 }} />

          </Marker>
        
      </MapView>
      
     </View>
</CardItem>
          </Card>
          <View style={styles.contit}>

<ScrollView>
<Title style={styles.title}>ThinkBig Restaurant</Title>
             <Text style={styles.title}>Product:</Text>
                <Text>Biriyani</Text>
                <Text style={styles.title}>Price:</Text>
                <Text>300</Text>
                <Text style={styles.title}>Name:</Text>
                <Text>Indian</Text>
                <Text style={styles.title}>Timings:</Text>
                <Text>12 Noon to 1 AM</Text>
                <Text style={styles.title}>Restaurant Name:</Text>
                <Text>ThinkBig Restaurant</Text>
                <Text style={styles.title}>Highlights:</Text>
                <Text>Cash</Text>
                <Text>Debit Card</Text>
                <Text>Credit Card</Text>
                <Text>Delivery</Text>
                <Text>Air Conditioned</Text>
                <Text style={styles.title}>About:</Text>
                <Text>It Is Testing App</Text>
                <Text style={styles.title}>Your Order Is Delivery Soon...</Text>
                <Text style={styles.title2}>Please Wait...</Text>


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
container: {
  height: 240, width: null, flex: 1
  
},
map: {
  ...StyleSheet.absoluteFillObject,
},
title:{
  fontWeight:'bold',
  fontSize:22,
  color:'blue'
},
title2:{
  fontWeight:'bold',
  fontSize:24,
  color:'blue',
  marginHorizontal:130,
},
contit:{
  marginHorizontal:15
},    
});
