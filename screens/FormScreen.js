import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE,
  AnimatedRegion,
} from 'react-native-maps';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const origin = {latitude: 13.8841797, longitude: 100.5737435};
const destination = {latitude: 13.880268, longitude: 100.591321};

const GOOGLE_MAPS_APIKEY = 'AIzaSyCw0Pn54CgdScV_9k7dVF6QhQ4Ohv3BJ1w';

export class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: {},
      count: 0,
      TextValue: 'เวลารับคำสั่ง',

      //initialPosition: 'unknown',
      //lastPosition: 'unknown',
      // Emp: '1',
      // Lat: '',
      // Lng: '',
      // watchID: ?number = null;
    };
  }

  //watchID: ?number = null;

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
        console.log(
          'userlocation latitude  --> ' + this.state.userLocation.latitude,
        );
        console.log(
          'userlocation longitude --> ' + this.state.userLocation.longitude,
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 20000}, //this worked for me
    );
  }

  /* Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        this.setState({initialPosition});

      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    this.watchID = Geolocation.watchPosition(position => {
      const lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  } */

  onLoginPressed = () => {
    const url = 'http://dc.totcloud.com/TestApi/api/TestLocation/';
    axios
      .post(url + 'Create/', {
        Employee_Id: 1,
        Lat: this.state.userLocation.latitude,
        Lng: this.state.userLocation.longitude,
      })
      .then(response => {
        console.log(response);
        if (response.data.Success == true) {
          Alert.alert(response.data.Message);

          console.log(response.data.Message);
        } else {
          Alert.alert(response.data.Message);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
      TextValue: 'เวลาออกจากฐาน',
    });
    console.log('TextValue state is :  ' + this.state.TextValue,);
  
  };

   /* -------------------------------------------------------------------------- */
  render() {
    const {count, TextValue} = this.state;
    return (
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: this.state.userLocation.latitude,
            longitude: this.state.userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          region={this.props.coordinate}
          style={{flexDirection: 'row', height: '50%', width: '100%'}}
        />

        {/* 
        <Marker 
        coordinate={{ latitude:this.state.userLocation.latitude,longitude:this.state.userLocation.longitude}} 

        title='test'
        pinColor='#fff000'> */}

        {/* <Callout
            onPress={() => {
              Linking.openURL(
                "http://maps.google.com/maps?q=loc:" + "13.8142851"+ "," + "100.5555916" + "(Label which you want)"
                //'http://maps.apple.com/?ll=13.8142851,100.5555916',
              );
            }}>
            <Text
              style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>
              hello world
            </Text>
            <Text style={{color: 'black', textAlign: 'center'}}>test2</Text>
          </Callout> */}
        {/* </Marker> */}

        {/*       <Marker coordinate={{ latitude: 13.8142851, longitude: 100.5555916 }}>
                <Callout onPress={() => { Linking.openURL(
                  //"http://maps.google.com/maps?q=loc:" + "13.8142851"+ "," + "100.5555916" + "(Label which you want)"
                  "http://maps.apple.com/?ll=13.8142851,100.5555916"
                  ) }}>
                  
                  <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>hello world</Text>
                  <Text style={{ color: "black", textAlign: "center" }}>test2</Text>
                </Callout>
              </Marker> */}

        {/*  
             <Marker
      coordinate={{ latitude: 13.8142851,
       longitude:100.5555916}}
      title={"KUY"}
      description={"kuy rai yom"} 
                      />  */}
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />   */}

        <View>
          <Button
            onPress={() => this.onLoginPressed()}
            title="TEST POST API"
            color="#007AFF"
          />
        </View>

        <Text>
          <Text style={styles.title}>userLocation latitude is : </Text>
          {this.state.userLocation.latitude}
        </Text>
        <Text>
          <Text style={styles.title}>userLocation longitude is : </Text>
          {this.state.userLocation.longitude}
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.orderText}>{this.state.TextValue}</Text>
        </TouchableOpacity>
        <Text>Count: {count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    width: '100%',
  },
  orderText: {
    fontWeight: '500',
    fontSize: 25,
    color: '#fff',
  },
});

export default FormScreen;
