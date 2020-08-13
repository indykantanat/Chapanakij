import React, {Component} from 'react';
import {Text,View,Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MapView,{Marker,Callout,PROVIDER_GOOGLE} from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const origin = { latitude: 13.8841797, longitude: 100.5737435 };
const destination = { latitude: 13.880268, longitude: 100.591321 };

const GOOGLE_MAPS_APIKEY = 'AIzaSyCw0Pn54CgdScV_9k7dVF6QhQ4Ohv3BJ1w';

export class HomeScreen extends Component {
  render() {

    return (
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
{/* 
<MapView
         provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.8841797,
          longitude: 100.5737435,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={{ height: "100%", width: "100%" }}
        >
          <Marker coordinate={{ latitude: 13.8142851, longitude: 100.5555916 }}>
                <Callout onPress={() => { Linking.openURL(
                  //"http://maps.google.com/maps?q=loc:" + "13.8142851"+ "," + "100.5555916" + "(Label which you want)"
                  "http://maps.apple.com/?ll=13.8142851,100.5555916"
                  ) }}>
                  
                  <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>hello world</Text>
                  <Text style={{ color: "black", textAlign: "center" }}>test2</Text>
                </Callout>
              </Marker>
           
            */}
           
            {/* <Marker
      coordinate={{ latitude: 13.8142851,
       longitude:100.5555916}}
      title={"KUY"}
      description={"kuy rai yom"} */}
                     {/* /> */}
         {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />  */} 
      {/* </MapView> */}
  
        

        <Text onPress={() => this.props.navigation.navigate('News')}>
          ไปหน้าข่าว !
        </Text>
        <Text onPress={() => this.props.navigation.navigate('Form')}>
          ไปหน้าฟอร์ม !
        </Text> 
      </View>
    );
  }
}

export default HomeScreen;
