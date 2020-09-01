import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Footer
} from "native-base";
import styles from "./style.js";
import * as firebase from 'firebase';
import logout from './views/src/domain/logout';







const drawerCover = require("./assets/background2.jpg");
const datas = [
  {
    name: "Home",
    route: "home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "about",
    icon: "settings",
    bg: "#C5F442",
    route: "about",
  }
];

class SideBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 3
    };
    
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 2,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
        <Footer style={{
                        backgroundColor: "white"
                      }}>
          <Text>It is Testing App</Text>
        </Footer>
      </Container>
    );
  }
}

export default SideBar2;