// Deverlop BY INDYKANTANAT
//options={{ headerShown: false}}          //delete header per page
//screenOptions={{ headerShown: false}}    // delete header all screens

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//ALL Screen is here !
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import FormScreen from './screens/FormScreen';
import KratooScreen from './screens/KratooScreen';
import DocumentScreen from './screens/DocumentScreen';
import LoadingScreen from './screens/LoadingScreen';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'DEMO',
          headerStyle: {
            backgroundColor: '#000080',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      {/* <HomeStack.Screen name="Doc" component={DocumentScreen} /> */}
    </HomeStack.Navigator>
  );
}

const NewsStack = createStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'ข่าวสาร',
          headerStyle: {
            backgroundColor: '#000080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <NewsStack.Screen name="Home" component={HomeScreen} />
      <NewsStack.Screen name="Doc" component={DocumentScreen} />
    </NewsStack.Navigator>
  );
}

const FormStack = createStackNavigator();
function FormStackScreen() {
  return (
    <FormStack.Navigator>
      <FormStack.Screen name="Form" 
      component={FormScreen} 
      options={{
        title: 'แบบฟอร์ม',
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
      />
    </FormStack.Navigator>
  );
}

const KratooStack = createStackNavigator();
function KratooStackScreen() {
  return (
    <KratooStack.Navigator>
      <KratooStack.Screen name="Kratoo" 
      component={KratooScreen} 
      options={{
        title: 'กระทู้',
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}/>
    </KratooStack.Navigator>
  );
}

// All tabbar screens
const Tab = createBottomTabNavigator();
const tabs = (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#000080',
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          //borderTopRightRadius: 10,
          //borderTopLeftRadius: 10,
          //borderTopWidth: 0,
          // backgroundColor: '#FFFFFF',
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 20,
          // height: 55,
          //paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{title: 'หน้าหลัก'}}
      />
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{title: 'ข่าวสาร'}}
      />
      <Tab.Screen
        name="Form"
        component={FormStackScreen}
        options={{title: 'แบบฟอร์ม'}}
      />
      <Tab.Screen
        name="Kratoo"
        component={KratooStackScreen}
        options={{title: 'กระทู้'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default function App() {
  return tabs;
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'หน้าหลัก'}}
//         />
//         <Tab.Screen
//           name="News"
//           component={NewsScreen}
//           options={{title: 'ข่าวสาร'}}
//         />
//         <Tab.Screen
//           name="Form"s
//           component={FormScreesn}
//           options={{title: 'แบบฟอร์ม'}}
//         />
//         <Tab.Screen
//           name="Kratoo"
//           component={KratooScreen}
//           options={{title: 'กระทู้'}}
//         />
//         <Tab.Screen
//           name="Doc"
//           component={DocumentScreen}
//           options={{title: 'เอกสาร'}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
