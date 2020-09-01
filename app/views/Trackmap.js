import React, { Component } from 'react';
import { ImageBackground ,Dimensions} from 'react-native';
import { StyleSheet, Alert, View, Image} from 'react-native';
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
const destination = {latitude: 37.771707, longitude: -122.4053769};
//const GOOGLE_MAPS_APIKEY = 'AIzaSyB_MrS5r7umenpdxh3POsEP8joCoRCX8TA';
export default class Track extends Component {
  constructor() {
    super();   
     this.state = {
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
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Map',
        headerStyle: {
          backgroundColor: '#007ff5',
          Icon:'arrow-back'
        },
        headerTitleStyle: {
          color: '#FFF'
        }
      });

    render() {
      
                return (
      
        <View style={styles.container}>

        <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.mapStyle }
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
         
          <Icon style={ styles.icon}  onPress={ () => this.componentDidMount } name='pin' />
      </MapView>
   
</View>    

            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
        alignItems: 'center',  
        justifyContent: 'flex-end',  
      },  
      mapStyle: {  
        position: 'absolute',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
      },  
map: {
  ...StyleSheet.absoluteFillObject,
},
icon:{
marginTop:660,
color:'blue',
fontSize:56,
marginLeft:360
}
});
