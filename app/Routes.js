import React, { Component } from 'react';
import {Router, Stack, Scene, Drawer} from 'react-native-router-flux';
import AppContainer from "./views/src/AppContainer.js"
import Home from "./views/Home.js";
import Biriyani from "./views/Biriyani.js";
import OrderB from "./views/OrderB.js";
import Track from "./views/Track.js";
import Pizza from "./views/Pizza.js";
import Track2 from "./views/Track2.js";
import Trackmap from "./views/Trackmap.js";
import OrderP from "./views/OrderP.js";
import Mexican from './views/Mexican.js';
import OrderM from "./views/OrderM.js";
import About from "./views/About.js";
//import Firebase from "./views/Firebase.js";
import Login from './views/Login.js';
import Signup from "./views/Signup.js";
import SideBar2 from './Sidebar2.js';
import PhoneAuthentication from "./views/src/screens/PhoneAuthentication.js"




export default class Routes extends Component {
   render() {
       return (
        <Router>
           
           <Scene key="rootScene" hideNavBar>
        
           <Scene key = "appcontainer" component = {AppContainer}  initial = {true} />
  <Scene key = "login" component = {Login} hideNavBar/>
  <Scene key = "signup" component = {Signup} hideNavBar/>
  <Scene key = "phoneauthentication" component = {PhoneAuthentication}  hideNavBar />
  <Drawer
                        open={false}
                        type="overlay"
                        key="drawer"
                        contentComponent={SideBar2}
                        drawerWidth={300}
                    >

  <Scene key = "home" component = {Home} hideNavBar />
  <Scene key = "biriyani" component = {Biriyani} hideNavBar />
  <Scene key = "orderb" component = {OrderB} hideNavBar />
  <Scene key = "track" component = {Track} hideNavBar  />
  <Scene key = "orderp" component = {OrderP} hideNavBar />
  <Scene key = "orderm" component = {OrderM} hideNavBar />
  <Scene key = "pizza" component = {Pizza} hideNavBar />
  <Scene key = "track2" component = {Track2} hideNavBar  />
  <Scene key = "trackmap" component = {Trackmap}  hideNavBar  />
  <Scene key = "mexican" component = {Mexican} hideNavBar />
  <Scene key = "about" component = {About} hideNavBar />

</Drawer>
        </Scene>

    </Router>
       )
   }
}

