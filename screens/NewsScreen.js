import React, {Component} from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text,
  FlatList,
  ImageBackground,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,

} from 'react-native';

console.disableYellowBox = true;

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      TestLocation : [],
      //data : [],
    };

  }

  componentDidMount() {
    this.get();
  }

  
  get() {
    const url = "http://dc.totcloud.com/TestApi/";
    axios.get(url + "api/TestLocation/Get/1")
      .then(response => {
        this.setState({ TestLocation : response.data })
        Alert.alert(JSON.stringify(response.data)) 
      })
      .catch(err => {
        alert(JSON.stringify(error));
      })
  }
  
  renderItem(item) {
    const { cardStyle, avatarStyle, titleSubtitleSytle, imageItem, textClick } = style;
    return (
  
        <View style={cardStyle}>
       
          <View style={{  flexDirection: "column", width: "80%", margin: 6 }}>
            <View >
              <Text style={{ color: "#000000EE" ,fontSize:18 }}>ID :{item.Id}</Text>
              <Text style={{ color: "#000000EE" ,fontSize:18 }}>NAME :{item.Name}</Text>
              <Text style={{ color: "#000000EE" ,fontSize:18 }}>AGE :{item.Age}</Text>
              <Text style={{ color: "#000000EE" ,fontSize:18 }}>PHONE :{item.Phone}</Text>
             
            </View>
          </View>
        </View>
   
    );
  }





  

  render() {
    return (
      
        <View style={{flex:1,backgroundColor:'#ff3333'}}>
       
       {/* <Text style={{marginTop:10,fontSize:17,color:'#ffffff'}}>  {this.state.TestLocation.Id} </Text>
       <Text style={{marginTop:10,fontSize:17,color:'#ffffff'}}>  {this.state.TestLocation.Name} </Text>
       <Text style={{marginTop:10,fontSize:17,color:'#ffffff'}}>  {this.state.TestLocation.Age} </Text>
       <Text style={{marginTop:10,fontSize:17,color:'#ffffff'}}>  {this.state.TestLocation.Phone} </Text> */}

            <FlatList data={this.state.TestLocation}
              renderItem={({ item }) => this.renderItem(item)}>
            </FlatList>
            


     
         

            </View>
           
           
           
    )
    
  }
  }


const style = StyleSheet.create(
  {
    cardStyle: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      marginBottom: 20,
      borderRadius: 10,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      }, shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    avatarStyle: {
      width: 45,
      height: 45,
      borderRadius: (45 / 2)
    },
    titleSubtitleSytle: {
      flexDirection: "column",
      marginLeft: 16
    },
    imageItem: {
      width: "100%",
      height: 180,
      resizeMode: 'stretch',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textClick: {
      fontFamily: "Prompt-Bold",
      fontSize: 13,
      color: "#1D9D9E",
      marginTop: 10,
      textAlign: "center"
    },
    textHeader: {
      color: "black",
      fontSize: 20,
      paddingLeft: 20,
      marginBottom: 10,
      fontFamily: "Prompt-Bold"
    },
    
  })
